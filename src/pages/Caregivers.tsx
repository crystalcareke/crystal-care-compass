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
  Star, 
  Calendar,
  Clock,
  MapPin,
  Award,
  CheckCircle
} from "lucide-react";

const Caregivers = () => {
  const caregivers = [
    {
      id: 1,
      name: "Sarah Wilson",
      phone: "+254 700 111 222",
      email: "sarah.wilson@crystalhomecare.co.ke",
      specialties: ["Elderly Care", "Medication Management"],
      rating: 4.9,
      experience: "5 years",
      status: "available",
      currentClients: 8,
      maxClients: 12,
      location: "Westlands, Nairobi",
      certifications: ["CNA", "CPR", "First Aid"],
      nextShift: "Today, 8:00 AM"
    },
    {
      id: 2,
      name: "Michael Brown",
      phone: "+254 700 222 333",
      email: "michael.brown@crystalhomecare.co.ke",
      specialties: ["Physical Therapy", "Stroke Recovery"],
      rating: 4.8,
      experience: "7 years",
      status: "busy",
      currentClients: 10,
      maxClients: 10,
      location: "Karen, Nairobi",
      certifications: ["LPN", "Physical Therapy Assistant"],
      nextShift: "Tomorrow, 9:00 AM"
    },
    {
      id: 3,
      name: "Jennifer Garcia",
      phone: "+254 700 333 444",
      email: "jennifer.garcia@crystalhomecare.co.ke",
      specialties: ["Palliative Care", "Wound Care"],
      rating: 4.7,
      experience: "4 years",
      status: "available",
      currentClients: 6,
      maxClients: 10,
      location: "Kilimani, Nairobi",
      certifications: ["RN", "Palliative Care Specialist"],
      nextShift: "Today, 2:00 PM"
    },
    {
      id: 4,
      name: "David Miller",
      phone: "+254 700 444 555",
      email: "david.miller@crystalhomecare.co.ke",
      specialties: ["Dementia Care", "Daily Living Support"],
      rating: 4.6,
      experience: "3 years",
      status: "off-duty",
      currentClients: 7,
      maxClients: 12,
      location: "Lavington, Nairobi",
      certifications: ["CNA", "Dementia Care Specialist"],
      nextShift: "Monday, 7:00 AM"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      phone: "+254 700 555 666",
      email: "lisa.anderson@crystalhomecare.co.ke",
      specialties: ["Post-Surgery Care", "Rehabilitation"],
      rating: 4.9,
      experience: "6 years",
      status: "available",
      currentClients: 5,
      maxClients: 8,
      location: "Runda, Nairobi",
      certifications: ["RN", "Rehabilitation Specialist", "CPR"],
      nextShift: "Today, 10:00 AM"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-status-active text-white';
      case 'busy':
        return 'bg-warning text-white';
      case 'off-duty':
        return 'bg-status-inactive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getAvailabilityPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Caregivers</h1>
          <p className="text-muted-foreground">Manage your caregiving team and schedules</p>
        </div>
        <Button className="crystal-button-primary">
          <Plus className="mr-2 h-4 w-4" />
          Add New Caregiver
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Caregivers
            </CardTitle>
            <User className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">45</div>
            <p className="text-xs text-success">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Available Now
            </CardTitle>
            <CheckCircle className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">28</div>
            <p className="text-xs text-muted-foreground">62% capacity</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Average Rating
            </CardTitle>
            <Star className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4.8</div>
            <p className="text-xs text-success">+0.1 this month</p>
          </CardContent>
        </Card>

        <Card className="crystal-stat-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hours This Week
            </CardTitle>
            <Clock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,245</div>
            <p className="text-xs text-success">+8% vs last week</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="crystal-card">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search caregivers by name, specialty, or location..." 
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
                Status
              </Button>
              <Button variant="outline" size="sm">
                Specialty
              </Button>
              <Button variant="outline" size="sm">
                Location
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Caregivers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caregivers.map((caregiver) => (
          <Card key={caregiver.id} className="crystal-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{caregiver.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="text-sm text-muted-foreground">{caregiver.rating}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(caregiver.status)}>
                  {caregiver.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Contact & Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{caregiver.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{caregiver.location}</span>
                </div>
              </div>

              {/* Experience & Workload */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-medium">{caregiver.experience}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Client Load:</span>
                  <span className="font-medium">
                    {caregiver.currentClients}/{caregiver.maxClients}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({getAvailabilityPercentage(caregiver.currentClients, caregiver.maxClients)}%)
                    </span>
                  </span>
                </div>
              </div>

              {/* Specialties */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Award className="h-4 w-4 text-primary" />
                  Specialties:
                </div>
                <div className="flex flex-wrap gap-1">
                  {caregiver.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-2">
                <div className="text-sm font-medium">Certifications:</div>
                <div className="flex flex-wrap gap-1">
                  {caregiver.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Next Shift */}
              <div className="flex items-center gap-2 text-sm p-2 rounded-lg bg-muted/50">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Next Shift:</span>
                <span className="font-medium">{caregiver.nextShift}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button variant="default" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Caregivers;