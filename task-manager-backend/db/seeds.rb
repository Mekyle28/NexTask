# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# db/seeds.rb

# Destroy existing tasks to avoid duplicates when seeding
Task.destroy_all

# Create sample tasks
Task.create([
  { title: 'Complete React Frontend', description: 'Build a task manager using React.', completed: false },
  { title: 'Write Rails Backend', description: 'Set up a Ruby on Rails backend for the task manager.', completed: false },
  { title: 'Write Unit Tests', description: 'Write unit tests for both frontend and backend.', completed: false },
  { title: 'Deploy Application', description: 'Deploy the task manager app to Heroku.', completed: false },
  { title: 'Review Code', description: 'Go through the code and refactor where necessary.', completed: false }
])

puts "Seed data created successfully!"
