<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SurveyForm extends Model
{
    protected $fillable = [
        'first_name',
        'company_name',
        'has_site',
        'budget',
        'email',
        'project_description',
        'phone',
        'contacted',
        'contacted_at'
    ];

    protected $casts = [
        'contacted' => 'boolean',
        'contacted_at' => 'datetime',
    ];
} 