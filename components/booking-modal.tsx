"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, Phone, Mail, Car } from "lucide-react"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  preselectedVehicle?: string
}

export default function BookingModal({ open, onOpenChange, preselectedVehicle }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate booking submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Booking request submitted successfully! We will contact you shortly.")
    onOpenChange(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">Book Your Ride</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in your details and we'll get back to you with confirmation shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="booking-name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-secondary" />
              Full Name
            </Label>
            <Input id="booking-name" name="name" placeholder="Enter your full name" required className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-secondary" />
              Phone Number
            </Label>
            <Input id="booking-phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-secondary" />
              Email Address
            </Label>
            <Input id="booking-email" name="email" type="email" placeholder="your.email@example.com" className="h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-vehicle" className="flex items-center gap-2">
              <Car className="w-4 h-4 text-secondary" />
              Vehicle Type
            </Label>
            <Select name="vehicle" defaultValue={preselectedVehicle}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select a vehicle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Compact Sedan">Compact Sedan</SelectItem>
                <SelectItem value="Premium SUV">Premium SUV</SelectItem>
                <SelectItem value="Spacious MPV">Spacious MPV</SelectItem>
                <SelectItem value="Tempo Traveller">Tempo Traveller</SelectItem>
                <SelectItem value="Luxury Sedan">Luxury Sedan</SelectItem>
                <SelectItem value="Mini Bus">Mini Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="booking-pickup-date" className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-secondary" />
                Pickup Date
              </Label>
              <Input id="booking-pickup-date" name="pickup-date" type="date" required className="h-11" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="booking-pickup-time">Pickup Time</Label>
              <Input id="booking-pickup-time" name="pickup-time" type="time" required className="h-11" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="booking-location">Pickup Location</Label>
            <Input
              id="booking-location"
              name="location"
              placeholder="Enter pickup location in Wayanad"
              required
              className="h-11"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
