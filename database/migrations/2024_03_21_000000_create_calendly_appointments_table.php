<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('calendly_appointments', function (Blueprint $table) {
            $table->id();
            $table->date('appointment_date');
            $table->time('appointment_time');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('message')->nullable();
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('pending');
            $table->boolean('email_sent')->default(false);
            $table->timestamp('email_sent_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->string('cancellation_reason')->nullable();
            $table->timestamps();

            // Index pour les recherches fréquentes
            $table->index(['appointment_date', 'appointment_time']);
            $table->index('email');
            $table->index('phone');
            $table->index('status');
        });
    }

    public function down()
    {
        Schema::dropIfExists('calendly_appointments');
    }
}; 