import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  CheckCircle,
  Heart
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Clients",
      value: "127",
      change: "+5 this week",
      icon: Users,
      trend: "up"
    },
    {
      title: "Today's Appointments",
      value: "23",
      change: "8 completed",
      icon: Calendar,
      trend: "neutral"
    },
    {
      title: "Pending Care Plans",
      value: "12",
      change: "3 urgent",
      icon: FileText,
      trend: "attention"
    },
    {
      title: "Available Caregivers",
      value: "45",
      change: "85% capacity",
      icon: Heart,
      trend: "up"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      client: "Mary Johnson",
      caregiver: "Sarah Wilson",
      time: "09:00 AM",
      service: "Daily Care",
      status: "confirmed"
    },
    {
      id: 2,
      client: "Robert Smith",
      caregiver: "Michael Brown",
      time: "11:30 AM",
      service: "Physical Therapy",
      status: "pending"
    },
    {
      id: 3,
      client: "Elizabeth Davis",
      caregiver: "Jennifer Garcia",
      time: "02:15 PM",
      service: "Medication Support",
      status: "confirmed"
    }
  ];

  const recentNotes = [
    {
      id: 1,
      client: "Mary Johnson",
      note: "Patient showed improvement in mobility exercises. Mood positive.",
      caregiver: "Sarah Wilson",
      time: "2 hours ago"
    },
    {
      id: 2,
      client: "Robert Smith", 
      note: "Completed physical therapy session. Patient reported mild discomfort.",
      caregiver: "Michael Brown",
      time: "4 hours ago"
    },
    {
      id: 3,
      client: "Elizabeth Davis",
      note: "Medication administered on schedule. Vital signs stable.",
      caregiver: "Jennifer Garcia",
      time: "6 hours ago"
    }
  ];

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to Crystal Homecare</p>
        </div>
        <Button className="crystal-button-primary">
          <TrendingUp className="mr-2 h-4 w-4" />
          View Reports
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="crystal-stat-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-xs ${
                stat.trend === 'up' ? 'text-success' : 
                stat.trend === 'attention' ? 'text-warning' : 
                'text-muted-foreground'
              }`}>
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Appointments */}
        <Card className="crystal-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Appointments
            </CardTitle>
            <CardDescription>
              Scheduled visits and care sessions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-foreground">{appointment.client}</p>
                    <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                      {appointment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {appointment.time}
                    </div>
                    <span>•</span>
                    <span>{appointment.caregiver}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{appointment.service}</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Notes */}
        <Card className="crystal-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Notes
            </CardTitle>
            <CardDescription>
              Latest care updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentNotes.map((note) => (
              <div key={note.id} className="space-y-2 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm text-foreground">{note.client}</p>
                  <span className="text-xs text-muted-foreground">{note.time}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{note.note}</p>
                <p className="text-xs text-muted-foreground">by {note.caregiver}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="crystal-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="h-6 w-6" />
              Add New Client
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              Schedule Visit
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              Create Care Plan
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <AlertCircle className="h-6 w-6" />
              Report Incident
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;