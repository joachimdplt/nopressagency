<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CalendlyAppointment extends Model
{
    protected $table = 'calendly_appointments';

    protected $fillable = [
        'appointment_date',
        'appointment_time',
        'name',
        'email',
        'phone',
        'message',
        'status'
    ];

    protected $casts = [
        'appointment_date' => 'date',
        'appointment_time' => 'datetime',
        'email_sent' => 'boolean',
        'email_sent_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'cancelled_at' => 'datetime'
    ];
} 