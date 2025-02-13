<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('survey_forms', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('company_name');
            $table->enum('has_site', ['yes', 'no']);
            $table->string('budget');
            $table->string('email');
            $table->text('project_description');
            $table->string('phone');
            $table->boolean('contacted')->default(false);
            $table->timestamp('contacted_at')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('survey_forms');
    }
}; 