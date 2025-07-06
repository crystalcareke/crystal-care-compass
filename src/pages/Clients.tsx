import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Filter, 
  User, 
  Phone, 
  MapPin, 
  Calendar,
  Heart,
  AlertCircle
} from "lucide-react";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Mary Johnson",
      age: 78,
      address: "123 Oak Street, Nairobi",
      phone: "+254 700 123 456",
      caregiver: "Sarah Wilson",
      nextVisit: "Today, 9:00 AM",
      status: "active",
      priority: "medium",
      conditions: ["Diabetes", "Hypertension"],
      lastVisit: "Yesterday"
    },
    {
      id: 2,
      name: "Robert Smith",
      age: 82,
      address: "456 Pine Avenue, Nairobi",
      phone: "+254 700 234 567",
      caregiver: "Michael Brown",
      nextVisit: "Tomorrow, 11:30 AM",
      status: "active",
      priority: "high",
      conditions: ["Stroke Recovery", "Physical Therapy"],
      lastVisit: "2 days ago"
    },
    {
      id: 3,
      name: "Elizabeth Davis",
      age: 65,
      address: "789 Maple Road, Nairobi",
      phone: "+254 700 345 678",
      caregiver: "Jennifer Garcia",
      nextVisit: "Friday, 2:15 PM",
      status: "active",
      priority: "low",
      conditions: ["Medication Management"],
      lastVisit: "3 days ago"
    },
    {
      id: 4,
      name: "William Brown",
      age: 88,
      address: "321 Cedar Lane, Nairobi",
      phone: "+254 700 456 789",
      caregiver: "David Miller",
      nextVisit: "Monday, 10:00 AM",
      status: "inactive",
      priority: "medium",
      conditions: ["Dementia Care", "Daily Activities"],
      lastVisit: "1 week ago"
    },
    {
      id: 5,
      name: "Margaret Wilson",
      age: 73,
      address: "654 Birch Street, Nairobi",
      phone: "+254 700 567 890",
      caregiver: "Lisa Anderson",
      nextVisit: "Wednesday, 3:45 PM",
      status: "active",
      priority: "high",
      conditions: ["Post-Surgery Care", "Wound Care"],
      lastVisit: "Today"
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
    return status === 'active' ? 'bg-status-active text-white' : 'bg-status-inactive text-white';
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clients</h1>
          <p className="text-muted-foreground">Manage your client information and care plans</p>
        </div>
        <Button className="crystal-button-primary">
          <Plus className="mr-2 h-4 w-4" />
          Add New Client
        </Button>
      </div>

      {/* Filters */}
      <Card className="crystal-card">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search clients by name, address, or condition..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                Priority
              </Button>
              <Button variant="outline" size="sm">
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clients Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client) => (
          <Card key={client.id} className="crystal-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <CardDescription>Age {client.age}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge className={getPriorityColor(client.priority)}>
                    {client.priority}
                  </Badge>
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{client.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{client.phone}</span>
                </div>
              </div>

              {/* Caregiver & Schedule */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-medium">Caregiver:</span>
                  <span className="text-muted-foreground">{client.caregiver}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Next Visit:</span>
                  <span className="text-muted-foreground">{client.nextVisit}</span>
                </div>
              </div>

              {/* Conditions */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <AlertCircle className="h-4 w-4 text-warning" />
                  Conditions:
                </div>
                <div className="flex flex-wrap gap-1">
                  {client.conditions.map((condition, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button variant="default" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Schedule Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="crystal-card">
        <CardHeader>
          <CardTitle>Client Summary</CardTitle>
          <CardDescription>Overview of client statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-foreground">127</div>
              <div className="text-sm text-muted-foreground">Total Clients</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-status-active/10">
              <div className="text-2xl font-bold text-status-active">98</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-priority-high/10">
              <div className="text-2xl font-bold text-priority-high">23</div>
              <div className="text-sm text-muted-foreground">High Priority</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <div className="text-2xl font-bold text-primary">45</div>
              <div className="text-sm text-muted-foreground">New This Month</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clients;