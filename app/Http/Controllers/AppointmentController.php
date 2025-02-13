<?php

namespace App\Http\Controllers;

use App\Models\CalendlyAppointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AppointmentController extends Controller
{
    public function store(Request $request)
    {
        Log::info('Données reçues:', $request->all());
        
        try {
            $validated = $request->validate([
                'appointment_date' => 'required|date',
                'appointment_time' => 'required',
                'name' => 'required|string',
                'email' => 'required|email',
                'phone' => 'required|string'
            ]);

            $appointment = CalendlyAppointment::create([
                ...$validated,
                'status' => 'pending'
            ]);

            Log::info('Rendez-vous créé:', $appointment->toArray());

            return response()->json([
                'success' => true,
                'appointment' => $appointment
            ], 201);
        } catch (\Exception $e) {
            Log::error('Erreur:', ['message' => $e->getMessage()]);
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la création du rendez-vous'
            ], 500);
        }
    }

    public function checkAvailability(Request $request)
    {
        $date = $request->date;
        $bookedTimes = CalendlyAppointment::where('appointment_date', $date)
            ->pluck('appointment_time')
            ->toArray();

        return response()->json([
            'booked_times' => $bookedTimes
        ]);
    }
} 