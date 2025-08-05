import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  deleteDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase configuration - Replace with your own config
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Types
export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  userType: 'farmer' | 'buyer' | 'admin';
  location?: string;
  farmSize?: number;
  soilType?: string;
  phone?: string;
  createdAt: any;
  updatedAt: any;
}

export interface CropPlan {
  id: string;
  userId: string;
  cropName: string;
  plantingDate: string;
  harvestDate: string;
  area: number;
  location: string;
  soilType: string;
  season: string;
  waterSource: string;
  budget: string;
  status: 'planned' | 'planted' | 'growing' | 'harvested';
  notes: string;
  createdAt: any;
  updatedAt: any;
}

export interface Expense {
  id: string;
  userId: string;
  type: string;
  category: string;
  amount: number;
  description: string;
  date: string;
  createdAt: any;
}

export interface Income {
  id: string;
  userId: string;
  type: string;
  amount: number;
  source: string;
  date: string;
  description?: string;
  createdAt: any;
}

export interface MarketplaceListing {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  price: number;
  priceUnit: string;
  location: string;
  contactPhone: string;
  images: string[];
  status: 'active' | 'sold' | 'inactive';
  createdAt: any;
  updatedAt: any;
}

export interface SoilTest {
  id: string;
  userId: string;
  location: string;
  phLevel: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  testDate: string;
  recommendations: string[];
  createdAt: any;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: any;
  chatRoom: string;
}

export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  createdAt: any;
  updatedAt: any;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  createdAt: any;
}

// Authentication Functions
export const registerUser = async (email: string, password: string, userData: {
  fullName: string;
  userType: 'farmer' | 'buyer' | 'admin';
}) => {
  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, {
      displayName: userData.fullName
    });

    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      email: user.email,
      displayName: userData.fullName,
      userType: userData.userType,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    return { user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Check if user profile exists, if not create one
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        id: user.uid,
        email: user.email,
        displayName: user.displayName,
        userType: 'farmer', // Default type
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    }

    return { user, error: null };
  } catch (error: any) {
    return { user: null, error: error.message };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// User Profile Functions
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};

export const updateUserProfile = async (userId: string, data: Partial<UserProfile>) => {
  try {
    await updateDoc(doc(db, 'users', userId), {
      ...data,
      updatedAt: serverTimestamp()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Crop Planning Functions
export const addCropPlan = async (cropPlan: Omit<CropPlan, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'cropPlans'), {
      ...cropPlan,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getCropPlans = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'cropPlans'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const cropPlans: CropPlan[] = [];
    querySnapshot.forEach((doc) => {
      cropPlans.push({ id: doc.id, ...doc.data() } as CropPlan);
    });
    return { data: cropPlans, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

export const updateCropPlan = async (planId: string, data: Partial<CropPlan>) => {
  try {
    await updateDoc(doc(db, 'cropPlans', planId), {
      ...data,
      updatedAt: serverTimestamp()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteCropPlan = async (planId: string) => {
  try {
    await deleteDoc(doc(db, 'cropPlans', planId));
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Expense Tracking Functions
export const addExpense = async (expense: Omit<Expense, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'expenses'), {
      ...expense,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getExpenses = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'expenses'),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const expenses: Expense[] = [];
    querySnapshot.forEach((doc) => {
      expenses.push({ id: doc.id, ...doc.data() } as Expense);
    });
    return { data: expenses, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

export const updateExpense = async (expenseId: string, data: Partial<Expense>) => {
  try {
    await updateDoc(doc(db, 'expenses', expenseId), data);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteExpense = async (expenseId: string) => {
  try {
    await deleteDoc(doc(db, 'expenses', expenseId));
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Income Tracking Functions
export const addIncome = async (income: Omit<Income, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'income'), {
      ...income,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getIncome = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'income'),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const income: Income[] = [];
    querySnapshot.forEach((doc) => {
      income.push({ id: doc.id, ...doc.data() } as Income);
    });
    return { data: income, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

// Marketplace Functions
export const addMarketplaceListing = async (listing: Omit<MarketplaceListing, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'marketplace'), {
      ...listing,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getMarketplaceListings = async (category?: string) => {
  try {
    let q = query(
      collection(db, 'marketplace'),
      where('status', '==', 'active'),
      orderBy('createdAt', 'desc')
    );
    
    if (category && category !== 'All') {
      q = query(
        collection(db, 'marketplace'),
        where('status', '==', 'active'),
        where('category', '==', category),
        orderBy('createdAt', 'desc')
      );
    }
    
    const querySnapshot = await getDocs(q);
    const listings: MarketplaceListing[] = [];
    querySnapshot.forEach((doc) => {
      listings.push({ id: doc.id, ...doc.data() } as MarketplaceListing);
    });
    return { data: listings, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

export const getUserMarketplaceListings = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'marketplace'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const listings: MarketplaceListing[] = [];
    querySnapshot.forEach((doc) => {
      listings.push({ id: doc.id, ...doc.data() } as MarketplaceListing);
    });
    return { data: listings, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

export const updateMarketplaceListing = async (listingId: string, data: Partial<MarketplaceListing>) => {
  try {
    await updateDoc(doc(db, 'marketplace', listingId), {
      ...data,
      updatedAt: serverTimestamp()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// Soil Test Functions
export const addSoilTest = async (soilTest: Omit<SoilTest, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'soilTests'), {
      ...soilTest,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getSoilTests = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'soilTests'),
      where('userId', '==', userId),
      orderBy('testDate', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const soilTests: SoilTest[] = [];
    querySnapshot.forEach((doc) => {
      soilTests.push({ id: doc.id, ...doc.data() } as SoilTest);
    });
    return { data: soilTests, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

// Chat Functions
export const sendChatMessage = async (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
  try {
    const docRef = await addDoc(collection(db, 'chatMessages'), {
      ...message,
      timestamp: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getChatMessages = async (chatRoom: string) => {
  try {
    const q = query(
      collection(db, 'chatMessages'),
      where('chatRoom', '==', chatRoom),
      orderBy('timestamp', 'asc'),
      limit(100)
    );
    const querySnapshot = await getDocs(q);
    const messages: ChatMessage[] = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() } as ChatMessage);
    });
    return { data: messages, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

// Forum Functions
export const addForumPost = async (post: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'forumPosts'), {
      ...post,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getForumPosts = async (category?: string) => {
  try {
    let q = query(
      collection(db, 'forumPosts'),
      orderBy('createdAt', 'desc')
    );
    
    if (category && category !== 'All') {
      q = query(
        collection(db, 'forumPosts'),
        where('category', '==', category),
        orderBy('createdAt', 'desc')
      );
    }
    
    const querySnapshot = await getDocs(q);
    const posts: ForumPost[] = [];
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() } as ForumPost);
    });
    return { data: posts, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

// Notification Functions
export const addNotification = async (notification: Omit<Notification, 'id' | 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'notifications'), {
      ...notification,
      createdAt: serverTimestamp()
    });
    return { id: docRef.id, error: null };
  } catch (error: any) {
    return { id: null, error: error.message };
  }
};

export const getUserNotifications = async (userId: string) => {
  try {
    const q = query(
      collection(db, 'notifications'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    const notifications: Notification[] = [];
    querySnapshot.forEach((doc) => {
      notifications.push({ id: doc.id, ...doc.data() } as Notification);
    });
    return { data: notifications, error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};

export const markNotificationAsRead = async (notificationId: string) => {
  try {
    await updateDoc(doc(db, 'notifications', notificationId), {
      read: true
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

// File Upload Functions
export const uploadFile = async (file: File, path: string) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return { url: downloadURL, error: null };
  } catch (error: any) {
    return { url: null, error: error.message };
  }
};

// Auth State Helper
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

// Listen to auth state changes
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};