# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
user1 = User.create!({email: "ASEbuzz@aol.com", password: "password", first_name: "Aaron", last_name: "Baum"})
user2 = User.create!({email: "jpjohnston@ucdavis.edu", password: "password", first_name: "Joseph", last_name: "Johnston"})


#movies

movie1 = Movie.create!(title: "Starship Troopers", synopsis: "An intergallactic battle between human and bugs", runtime: "125 min", 
genre: "Sci-Fi", release_date: DateTime.strptime("11/7/1997", "%m/%d/%Y"), rating: 5.0, on_dvd: true)