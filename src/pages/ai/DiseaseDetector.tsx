import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Camera, Scan, AlertTriangle, CheckCircle, Info } from "lucide-react";

const DiseaseDetector = () => {
  const detectionHistory = [
    {
      id: 1,
      image: "/placeholder.svg",
      crop: "Tomato",
      disease: "Early Blight",
      confidence: 94,
      severity: "Medium",
      date: "2 hours ago",
      status: "Treated"
    },
    {
      id: 2,
      image: "/placeholder.svg",
      crop: "Rice",
      disease: "Brown Spot",
      confidence: 87,
      severity: "Low",
      date: "1 day ago",
      status: "Monitoring"
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Scan className="h-8 w-8 text-primary" />
            AI Disease Detector
          </h1>
          <p className="text-muted-foreground">Upload plant images to detect diseases and get treatment recommendations</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Plant Image
              </CardTitle>
              <CardDescription>Take a clear photo of the affected plant part for accurate detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="mx-auto w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                    <Camera className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">Upload or Take Photo</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      For best results, ensure good lighting and focus on affected areas
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <Button>
                      <Upload className="h-4 w-4 mr-2" />
                      Choose File
                    </Button>
                    <Button variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Photography Tips:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use natural daylight for clear images</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Focus on the affected area (leaves, stems, fruits)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Include healthy parts for comparison</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Take multiple angles if needed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scan className="h-5 w-5" />
                Analysis Results
              </CardTitle>
              <CardDescription>AI-powered disease detection results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-8 text-muted-foreground">
                  <Scan className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Upload an image to start analysis</p>
                </div>

                {/* Sample Results - Hidden by default */}
                <div className="hidden space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Disease Detected</h4>
                    <Badge variant="destructive">High Confidence</Badge>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <span className="font-medium text-red-800">Early Blight (Alternaria solani)</span>
                    </div>
                    <p className="text-sm text-red-700 mb-3">
                      Fungal disease causing brown spots with concentric rings on leaves.
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Confidence Level:</span>
                      <span className="font-medium">94%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Treatment Recommendations:</h4>
                    <div className="space-y-2">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Immediate Action</h5>
                        <p className="text-sm text-muted-foreground">
                          Remove and destroy affected leaves. Apply copper-based fungicide.
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Prevention</h5>
                        <p className="text-sm text-muted-foreground">
                          Improve air circulation, avoid overhead watering, rotate crops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detection History */}
        <Card>
          <CardHeader>
            <CardTitle>Detection History</CardTitle>
            <CardDescription>Your previous disease detections and treatments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {detectionHistory.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                    <img src={item.image} alt="Plant" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{item.crop} - {item.disease}</h4>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={item.severity === 'High' ? 'destructive' : item.severity === 'Medium' ? 'default' : 'secondary'}
                        >
                          {item.severity}
                        </Badge>
                        <Badge variant="outline">{item.confidence}%</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.date}</span>
                      <div className="flex items-center gap-1">
                        <div className={`h-2 w-2 rounded-full ${
                          item.status === 'Treated' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span>{item.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Supported Crops */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Supported Crops & Diseases
            </CardTitle>
            <CardDescription>Our AI can detect diseases in these crops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { crop: "Tomato", diseases: ["Early Blight", "Late Blight", "Leaf Mold", "Mosaic Virus"] },
                { crop: "Rice", diseases: ["Brown Spot", "Blast", "Bacterial Blight", "Sheath Blight"] },
                { crop: "Wheat", diseases: ["Rust", "Powdery Mildew", "Septoria", "Fusarium Head"] },
                { crop: "Cotton", diseases: ["Bollworm", "Leaf Curl", "Bacterial Blight", "Verticillium Wilt"] },
                { crop: "Potato", diseases: ["Late Blight", "Early Blight", "Black Scurf", "Common Scab"] },
                { crop: "Corn", diseases: ["Leaf Blight", "Rust", "Gray Leaf Spot", "Smut"] }
              ].map((item) => (
                <div key={item.crop} className="space-y-2">
                  <h4 className="font-medium">{item.crop}</h4>
                  <div className="space-y-1">
                    {item.diseases.map((disease) => (
                      <Badge key={disease} variant="outline" className="text-xs">
                        {disease}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DiseaseDetector;