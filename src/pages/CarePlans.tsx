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
  User, 
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  Target,
  Activity
} from "lucide-react";

const CarePlans = () => {
  const carePlans = [
    {
      id: 1,
      title: "Diabetes & Hypertension Management",
      client: "Mary Johnson",
      caregiver: "Sarah Wilson",
      startDate: "2024-01-15",
      reviewDate: "2024-04-15",
      status: "active",
      priority: "medium",
      goals: [
        "Blood glucose monitoring twice daily",
        "Blood pressure management",
        "Medication adherence",
        "Diet management"
      ],
      tasks: [
        { task: "Check blood glucose", frequency: "2x daily", completed: 85 },
        { task: "Administer medications", frequency: "As prescribed", completed: 95 },
        { task: "Monitor blood pressure", frequency: "Daily", completed: 78 },
        { task: "Prepare diabetic meals", frequency: "3x daily", completed: 90 }
      ],
      lastUpdate: "2024-01-20"
    },
    {
      id: 2,
      title: "Post-Stroke Rehabilitation",
      client: "Robert Smith",
      caregiver: "Michael Brown",
      startDate: "2024-01-10",
      reviewDate: "2024-03-10",
      status: "active",
      priority: "high",
      goals: [
        "Improve mobility and balance",
        "Speech therapy exercises",
        "Prevent complications",
        "Regain independence"
      ],
      tasks: [
        { task: "Physical therapy exercises", frequency: "2x daily", completed: 72 },
        { task: "Speech therapy", frequency: "Daily", completed: 68 },
        { task: "Mobility assistance", frequency: "As needed", completed: 88 },
        { task: "Monitor vitals", frequency: "Daily", completed: 95 }
      ],
      lastUpdate: "2024-01-18"
    },
    {
      id: 3,
      title: "Palliative Care Support",
      client: "Elizabeth Davis",
      caregiver: "Jennifer Garcia",
      startDate: "2024-01-05",
      reviewDate: "2024-02-05",
      status: "active",
      priority: "high",
      goals: [
        "Pain management",
        "Comfort care",
        "Emotional support",
        "Family support"
      ],
      tasks: [
        { task: "Pain assessment", frequency: "4x daily", completed: 92 },
        { task: "Medication management", frequency: "As needed", completed: 98 },
        { task: "Comfort measures", frequency: "Continuous", completed: 85 },
        { task: "Family counseling", frequency: "Weekly", completed: 75 }
      ],
      lastUpdate: "2024-01-19"
    },
    {
      id: 4,
      title: "Dementia Care Plan",
      client: "William Brown",
      caregiver: "David Miller",
      startDate: "2023-12-01",
      reviewDate: "2024-03-01",
      status: "review-needed",
      priority: "medium",
      goals: [
        "Maintain cognitive function",
        "Ensure safety",
        "Daily living support",
        "Social engagement"
      ],
      tasks: [
        { task: "Cognitive stimulation", frequency: "Daily", completed: 65 },
        { task: "Safety monitoring", frequency: "Continuous", completed: 88 },
        { task: "Personal care assistance", frequency: "Daily", completed: 92 },
        { task: "Social activities", frequency: "3x weekly", completed: 45 }
      ],
      lastUpdate: "2024-01-12"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-priority-high text-white';
      case 'medium':
        return 'bg-priority-medium text-white';
      case 'low':
        return 'bg-priority-low text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-status-active text-white';
      case 'review-needed':
        return 'bg-warning text-white';
      case 'completed':
        return 'bg-success text-white';
      case 'paused':
        return 'bg-status-inactive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCompletionColor = (percentage: number) => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Care Plans</h1>
          <p className="text-muted-foreground">Create and manage personalized care plans for your clients</p>
        </div>
        <Button className="crystal-button-primary">
          <Plus className="mr-2 h-4 w-4" />
          Create Care Plan
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Care Plans
            </CardTitle>
            <FileText className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">127</div>
            <p className="text-xs text-success">+8 this month</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Plans
            </CardTitle>
            <Activity className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">98</div>
            <p className="text-xs text-muted-foreground">77% of total</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Need Review
            </CardTitle>
            <AlertCircle className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-warning">3 overdue</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Completion
            </CardTitle>
            <Target className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">82%</div>
            <p className="text-xs text-success">+5% this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters & Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All Plans</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search care plans..." 
                className="pl-10 w-80"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-6">
          {/* Care Plans Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {carePlans.map((plan) => (
              <Card key={plan.id} className="crystal-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{plan.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {plan.client}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge className={getPriorityColor(plan.priority)}>
                        {plan.priority}
                      </Badge>
                      <Badge className={getStatusColor(plan.status)}>
                        {plan.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Plan Details */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Caregiver</div>
                      <div className="font-medium">{plan.caregiver}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Start Date</div>
                      <div className="font-medium">{plan.startDate}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Review Date</div>
                      <div className="font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {plan.reviewDate}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground">Last Updated</div>
                      <div className="font-medium flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {plan.lastUpdate}
                      </div>
                    </div>
                  </div>

                  {/* Goals */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Target className="h-4 w-4 text-primary" />
                      Care Goals ({plan.goals.length})
                    </div>
                    <div className="space-y-1">
                      {plan.goals.slice(0, 2).map((goal, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="h-3 w-3" />
                          {goal}
                        </div>
                      ))}
                      {plan.goals.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{plan.goals.length - 2} more goals
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Task Completion Summary */}
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Task Completion</div>
                    <div className="space-y-2">
                      {plan.tasks.slice(0, 2).map((task, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground truncate">{task.task}</span>
                          <span className={`font-medium ${getCompletionColor(task.completed)}`}>
                            {task.completed}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button variant="default" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="crystal-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common care plan management tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Plus className="h-6 w-6" />
              Create New Plan
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              Templates
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertCircle className="h-6 w-6" />
              Plans Due Review
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Activity className="h-6 w-6" />
              Progress Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarePlans;