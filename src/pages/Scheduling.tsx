import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus, 
  Filter, 
  Calendar, 
  Clock, 
  User,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  XCircle
} from "lucide-react";

const Scheduling = () => {
  const todayAppointments = [
    {
      id: 1,
      time: "08:00 AM",
      duration: "2 hours",
      client: "Mary Johnson",
      clientAddress: "123 Oak Street, Nairobi",
      caregiver: "Sarah Wilson",
      service: "Daily Care & Medication",
      status: "confirmed",
      priority: "medium",
      notes: "Check blood pressure, administer medications"
    },
    {
      id: 2,
      time: "10:30 AM",
      duration: "1.5 hours",
      client: "Robert Smith",
      clientAddress: "456 Pine Avenue, Nairobi",
      caregiver: "Michael Brown",
      service: "Physical Therapy",
      status: "confirmed",
      priority: "high",
      notes: "Post-stroke rehabilitation session"
    },
    {
      id: 3,
      time: "02:15 PM",
      duration: "1 hour",
      client: "Elizabeth Davis",
      clientAddress: "789 Maple Road, Nairobi",
      caregiver: "Jennifer Garcia",
      service: "Palliative Care",
      status: "pending",
      priority: "high",
      notes: "Pain assessment and comfort care"
    },
    {
      id: 4,
      time: "04:00 PM",
      duration: "2 hours",
      client: "William Brown",
      clientAddress: "321 Cedar Lane, Nairobi",
      caregiver: "David Miller",
      service: "Dementia Care",
      status: "confirmed",
      priority: "medium",
      notes: "Cognitive activities and safety monitoring"
    }
  ];

  const weeklySchedule = [
    {
      day: "Monday",
      date: "Jan 22",
      appointments: 8,
      caregivers: 6,
      status: "normal"
    },
    {
      day: "Tuesday",
      date: "Jan 23",
      appointments: 12,
      caregivers: 8,
      status: "busy"
    },
    {
      day: "Wednesday",
      date: "Jan 24",
      appointments: 6,
      caregivers: 5,
      status: "light"
    },
    {
      day: "Thursday",
      date: "Jan 25",
      appointments: 10,
      caregivers: 7,
      status: "normal"
    },
    {
      day: "Friday",
      date: "Jan 26",
      appointments: 9,
      caregivers: 6,
      status: "normal"
    },
    {
      day: "Saturday",
      date: "Jan 27",
      appointments: 15,
      caregivers: 10,
      status: "busy"
    },
    {
      day: "Sunday",
      date: "Jan 28",
      appointments: 5,
      caregivers: 4,
      status: "light"
    }
  ];

  const availableCaregivers = [
    {
      id: 1,
      name: "Lisa Anderson",
      specialties: ["Post-Surgery Care", "Rehabilitation"],
      availability: "Available now",
      nextFree: null,
      currentLocation: "Runda, Nairobi",
      status: "available"
    },
    {
      id: 2,
      name: "Patricia Wilson",
      specialties: ["Elderly Care", "Medication Management"],
      availability: "Busy until 3:00 PM",
      nextFree: "3:00 PM",
      currentLocation: "Westlands, Nairobi",
      status: "busy"
    },
    {
      id: 3,
      name: "James Rodriguez",
      specialties: ["Physical Therapy", "Mobility Support"],
      availability: "Available now",
      nextFree: null,
      currentLocation: "Karen, Nairobi",
      status: "available"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-status-active text-white';
      case 'pending':
        return 'bg-warning text-white';
      case 'cancelled':
        return 'bg-destructive text-white';
      case 'completed':
        return 'bg-success text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

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

  const getDayStatusColor = (status: string) => {
    switch (status) {
      case 'busy':
        return 'border-warning bg-warning/10';
      case 'light':
        return 'border-success bg-success/10';
      case 'normal':
        return 'border-primary bg-primary/10';
      default:
        return 'border-muted bg-muted/10';
    }
  };

  const getCaregiverStatusColor = (status: string) => {
    return status === 'available' ? 'bg-status-active text-white' : 'bg-warning text-white';
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Scheduling</h1>
          <p className="text-muted-foreground">Manage appointments and caregiver assignments</p>
        </div>
        <Button className="crystal-button-primary">
          <Plus className="mr-2 h-4 w-4" />
          Schedule Appointment
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Appointments
            </CardTitle>
            <Calendar className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-xs text-success">8 completed</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Available Caregivers
            </CardTitle>
            <User className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">out of 45 total</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Appointments
            </CardTitle>
            <AlertCircle className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">5</div>
            <p className="text-xs text-warning">Need confirmation</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              This Week Total
            </CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">165</div>
            <p className="text-xs text-success">+12 vs last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="caregivers">Caregivers</TabsTrigger>
        </TabsList>

        {/* Today's Schedule */}
        <TabsContent value="today" className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search today's appointments..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid gap-4">
            {todayAppointments.map((appointment) => (
              <Card key={appointment.id} className="crystal-card hover:shadow-md transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="font-semibold text-lg">{appointment.time}</span>
                          <span className="text-sm text-muted-foreground">({appointment.duration})</span>
                        </div>
                        <Badge className={getStatusColor(appointment.status)}>
                          {appointment.status}
                        </Badge>
                        <Badge className={getPriorityColor(appointment.priority)}>
                          {appointment.priority} priority
                        </Badge>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            <div>
                              <div className="font-medium">{appointment.client}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {appointment.clientAddress}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-secondary" />
                            <div>
                              <div className="font-medium">Caregiver: {appointment.caregiver}</div>
                              <div className="text-sm text-muted-foreground">{appointment.service}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {appointment.notes && (
                        <div className="p-3 rounded-lg bg-muted/50">
                          <div className="text-sm text-muted-foreground">Notes:</div>
                          <div className="text-sm">{appointment.notes}</div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact
                      </Button>
                      {appointment.status === 'pending' && (
                        <Button variant="default" size="sm">
                          Confirm
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Weekly View */}
        <TabsContent value="week" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-7">
            {weeklySchedule.map((day, index) => (
              <Card key={index} className={`crystal-card ${getDayStatusColor(day.status)}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">{day.day}</CardTitle>
                  <CardDescription className="text-xs">{day.date}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-2xl font-bold">{day.appointments}</div>
                  <div className="text-xs text-muted-foreground">appointments</div>
                  <div className="text-sm">
                    <span className="font-medium">{day.caregivers}</span>
                    <span className="text-muted-foreground"> caregivers</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="crystal-card">
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>Schedule distribution and capacity planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-foreground">165</div>
                  <div className="text-sm text-muted-foreground">Total Appointments</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-success/10">
                  <div className="text-2xl font-bold text-success">142</div>
                  <div className="text-sm text-muted-foreground">Confirmed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-warning/10">
                  <div className="text-2xl font-bold text-warning">23</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Available Caregivers */}
        <TabsContent value="caregivers" className="space-y-6">
          <Card className="crystal-card">
            <CardHeader>
              <CardTitle>Available Caregivers</CardTitle>
              <CardDescription>Current caregiver availability and assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {availableCaregivers.map((caregiver) => (
                <div key={caregiver.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium">{caregiver.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {caregiver.specialties.join(", ")}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {caregiver.currentLocation}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{caregiver.availability}</div>
                      {caregiver.nextFree && (
                        <div className="text-xs text-muted-foreground">Next free: {caregiver.nextFree}</div>
                      )}
                    </div>
                    <Badge className={getCaregiverStatusColor(caregiver.status)}>
                      {caregiver.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Assign
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Scheduling;