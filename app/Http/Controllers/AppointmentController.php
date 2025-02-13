<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'appointment_date' => 'required|date',
            'appointment_time' => 'required',
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'notes' => 'nullable|string'
        ]);

        $appointment = Appointment::create($validated);

        return response()->json([
            'success' => true,
            'appointment' => $appointment
        ], 201);
    }

    public function checkAvailability(Request $request)
    {
        $date = $request->date;
        $bookedTimes = Appointment::where('appointment_date', $date)
            ->pluck('appointment_time')
            ->toArray();

        return response()->json([
            'booked_times' => $bookedTimes
        ]);
    }
} 