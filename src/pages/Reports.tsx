import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Filter, 
  FileText, 
  Calendar, 
  Clock,
  AlertTriangle,
  User,
  TrendingUp,
  Download,
  Eye,
  Edit
} from "lucide-react";

const Reports = () => {
  const dailyCareLogs = [
    {
      id: 1,
      date: "Jan 21, 2024",
      client: "Mary Johnson",
      caregiver: "Sarah Wilson",
      timeSpent: "2.5 hours",
      activities: ["Medication administration", "Blood pressure check", "Meal preparation"],
      notes: "Patient in good spirits. Blood pressure slightly elevated (145/90). Administered medications as prescribed.",
      status: "submitted",
      priority: "normal"
    },
    {
      id: 2,
      date: "Jan 21, 2024",
      client: "Robert Smith",
      caregiver: "Michael Brown",
      timeSpent: "1.5 hours",
      activities: ["Physical therapy exercises", "Mobility assistance", "Vital signs monitoring"],
      notes: "Completed physical therapy session. Patient showed improvement in left arm mobility. Slight discomfort reported.",
      status: "submitted",
      priority: "normal"
    },
    {
      id: 3,
      date: "Jan 20, 2024",
      client: "Elizabeth Davis",
      caregiver: "Jennifer Garcia",
      timeSpent: "3 hours",
      activities: ["Pain assessment", "Comfort care", "Family consultation"],
      notes: "Pain levels managed well with current medication. Family meeting held to discuss care adjustments.",
      status: "pending-review",
      priority: "high"
    }
  ];

  const incidentReports = [
    {
      id: 1,
      date: "Jan 20, 2024",
      client: "William Brown",
      caregiver: "David Miller",
      type: "Fall",
      severity: "Minor",
      description: "Client slipped in bathroom while getting up from toilet. No injuries sustained. Safety measures reviewed.",
      actionTaken: "Added non-slip mats, increased supervision during bathroom visits",
      status: "resolved",
      followUp: "Monitor for 48 hours"
    },
    {
      id: 2,
      date: "Jan 19, 2024",
      client: "Margaret Wilson",
      caregiver: "Lisa Anderson",
      type: "Medication Error",
      severity: "Moderate",
      description: "Incorrect dosage of blood pressure medication administered. Error caught within 1 hour.",
      actionTaken: "Contacted physician, monitored vital signs, updated medication protocol",
      status: "under-review",
      followUp: "Physician consultation scheduled"
    }
  ];

  const progressNotes = [
    {
      id: 1,
      date: "Jan 21, 2024",
      client: "Mary Johnson",
      caregiver: "Sarah Wilson",
      category: "Health Status",
      summary: "Diabetes management showing positive results",
      details: "Blood glucose levels consistently within target range (80-120 mg/dL) for past 2 weeks. Patient adhering well to diet plan and medication schedule.",
      nextReview: "Feb 4, 2024"
    },
    {
      id: 2,
      date: "Jan 20, 2024",
      client: "Robert Smith",
      caregiver: "Michael Brown",
      category: "Mobility",
      summary: "Gradual improvement in post-stroke recovery",
      details: "Patient showing increased strength in left arm. Can now lift 2lb weights for 10 repetitions. Speech clarity improving.",
      nextReview: "Jan 27, 2024"
    },
    {
      id: 3,
      date: "Jan 19, 2024",
      client: "Elizabeth Davis",
      caregiver: "Jennifer Garcia",
      category: "Pain Management",
      summary: "Effective pain control with current regimen",
      details: "Pain levels consistently rated 3-4/10. Patient able to rest comfortably and engage in light activities.",
      nextReview: "Jan 26, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-status-active text-white';
      case 'pending-review':
        return 'bg-warning text-white';
      case 'resolved':
        return 'bg-success text-white';
      case 'under-review':
        return 'bg-priority-medium text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Minor':
        return 'bg-success text-white';
      case 'Moderate':
        return 'bg-warning text-white';
      case 'Severe':
        return 'bg-destructive text-white';
      case 'Critical':
        return 'bg-priority-high text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports</h1>
          <p className="text-muted-foreground">Care documentation and incident reporting</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
          <Button className="crystal-button-primary">
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Daily Logs Today
            </CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-xs text-success">18 submitted</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Incident Reports
            </CardTitle>
            <AlertTriangle className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">2</div>
            <p className="text-xs text-warning">1 under review</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Progress Notes
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">47</div>
            <p className="text-xs text-success">This week</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Reviews
            </CardTitle>
            <Clock className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-warning">3 overdue</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="daily-logs" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="daily-logs">Daily Logs</TabsTrigger>
            <TabsTrigger value="incidents">Incidents</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search reports..." 
                className="pl-10 w-80"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Daily Care Logs */}
        <TabsContent value="daily-logs" className="space-y-4">
          {dailyCareLogs.map((log) => (
            <Card key={log.id} className="crystal-card hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{log.client}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {log.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {log.caregiver}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {log.timeSpent}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(log.status)}>
                    {log.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Activities Performed:</div>
                  <div className="flex flex-wrap gap-1">
                    {log.activities.map((activity, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Care Notes:</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{log.notes}</p>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-3 w-3" />
                    View Full Report
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-3 w-3" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Export
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Incident Reports */}
        <TabsContent value="incidents" className="space-y-4">
          {incidentReports.map((incident) => (
            <Card key={incident.id} className="crystal-card hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      {incident.type} - {incident.client}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {incident.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {incident.caregiver}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge className={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                    <Badge className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Description:</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{incident.description}</p>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Action Taken:</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{incident.actionTaken}</p>
                </div>

                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <div className="text-sm font-medium text-warning mb-1">Follow-up Required:</div>
                  <p className="text-sm text-muted-foreground">{incident.followUp}</p>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-3 w-3" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-3 w-3" />
                    Update
                  </Button>
                  {incident.status === 'under-review' && (
                    <Button variant="default" size="sm">
                      Mark Resolved
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Progress Notes */}
        <TabsContent value="progress" className="space-y-4">
          {progressNotes.map((note) => (
            <Card key={note.id} className="crystal-card hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{note.client}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {note.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {note.caregiver}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline">
                    {note.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium mb-2">Summary:</div>
                  <p className="text-sm font-medium text-foreground">{note.summary}</p>
                </div>

                <div>
                  <div className="text-sm font-medium mb-2">Progress Details:</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{note.details}</p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div>
                    <div className="text-sm font-medium text-primary">Next Review:</div>
                    <div className="text-sm text-muted-foreground">{note.nextReview}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Schedule Review
                  </Button>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-3 w-3" />
                    View History
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-3 w-3" />
                    Add Update
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="mr-2 h-3 w-3" />
                    View Trends
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;