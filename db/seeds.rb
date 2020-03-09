# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

# users

user1 = User.create!({email: "ASEbuzz@aol.com", password: "password", first_name: "Aaron", last_name: "Baum"})
user2 = User.create!({email: "jpjohnston@ucdavis.edu", password: "password345", first_name: "Joseph", last_name: "Johnston"})
user3 = User.create!({email: "jeepMom4u@comcast.net", password: "password123", first_name: "Susan", last_name: "Johnston"})
user4 = User.create!({email: "fiona4life@hotmail.com", password: "catnip", first_name: "Fiona", last_name: "Johnston"})
user5 = User.create!({email: "bobclassOf71@gmail.com", password: "password678", first_name: "Bob", last_name: "Johnston"})
user6 = User.create!({email: "marioBros246@gmail.com", password: "password789", first_name: "Mario", last_name: "Favetti"})
user7 = User.create!({email: "baileyJ@gmail.com", password: "password012", first_name: "Bailey", last_name: "Johnston"})
user8 = User.create!({email: "armanino@yahoo.com", password: "password1", first_name: "Eric", last_name: "Armanino"})
user9 = User.create!({email: "LarryBird@gmail.com", password: "password2", first_name: "Larry", last_name: "Bird"})
user10 = User.create!({email: "hayden@yahoo.com", password: "password3", first_name: "Hayden", last_name: "Smith"})



#movies

Movie.destroy_all

movie1 = Movie.create!({title: "Iron Man 3", synopsis: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin", runtime: "130 min", 
genre: "Action", release_date: DateTime.strptime("05/03/2013", "%m/%d/%Y"), score: 5.0, on_dvd: true, rate: "PG-13"})

movie2 = Movie.create!({title: "Inception", synopsis: "A dream within a dream within a dream within a dream", runtime: "148 min", 
genre: "Sci-Fi", release_date: DateTime.strptime("03/07/2020", "%m/%d/%Y"), score: 4.5, in_theaters: true, rate: "PG-13"})

movie3 = Movie.create!({title: "The Dark Knight", synopsis: "Batman meets his match in the joker", runtime: "125 min", 
genre: "Action", release_date: DateTime.strptime("11/7/2012", "%m/%d/%Y"), score: 2.0, coming_soon: true, rate: "PG-13"})

movie4 = Movie.create!({title: "X-Men: Days Of Future Past", synopsis: "Wolverine is sent to the past to prevent a catastrophe", runtime: "132 min", 
genre: "Action", release_date: DateTime.strptime("5/23/2014", "%m/%d/%Y"), score: 1.6, on_dvd: true, rate: "PG-13"})

movie5 = Movie.create!({title: "Titanic", synopsis: "A blossoming rommance is interrupted by a tragic event", runtime: "210 min", 
genre: "Drama", release_date: DateTime.strptime("02/28/1997", "%m/%d/%Y"), score: 5.0, in_theaters: true, rate: "PG-13"})

movie6 = Movie.create!({title: "Contagion", synopsis: "The CDC works to find a cure for a worldwide pandemic ", runtime: "126 min", 
genre: "Drama", release_date: DateTime.strptime("11/9/2020", "%m/%d/%Y"), score: 0.5, coming_soon: true, rate: "PG-13"})

movie7 = Movie.create!({title: "Interstellar", synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", runtime: "169 min", 
genre: "Sci-fi", release_date: DateTime.strptime("11/7/2014", "%m/%d/%Y"), score: 3.5, on_dvd: true, rate: "PG-13"})

movie8 = Movie.create!({title: "The Dark Knight: Rises", synopsis: "Batman is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane", runtime: "164 min", 
genre: "Action", release_date: DateTime.strptime("3/01/2020", "%m/%d/%Y"), score: 3.2, in_theaters: true, rate: "PG-13"})

movie9 = Movie.create!({title: "American Hustle", synopsis: "A con man, Irving Rosenfeld, along with his seductive partner Sydney Prosser, is forced to work for a wild F.B.I. Agent", runtime: " min", 
genre: "Drama", release_date: DateTime.strptime("12/20/2020", "%m/%d/%Y"), score: 4.6, coming_soon: true, rate: "R"})

movie10 = Movie.create!({title: "Silver Linings Playbook", synopsis: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife.", runtime: "122 min", 
genre: "Drama", release_date: DateTime.strptime("12/25/2012", "%m/%d/%Y"), score: 4.9, on_dvd: true, rate: "R"})

movie11 = Movie.create!({title: "Matrix", synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", runtime: "136 min", 
genre: "Sci-fi", release_date: DateTime.strptime("3/31/1999", "%m/%d/%Y"), score: 4.9, on_dvd: true, rate: "R"})

movie12 = Movie.create!({title: "Joy", synopsis: "Joy is the story of the {title character, who rose to become founder and matriarch of a powerful family business dynasty.
", runtime: "124 min", genre: "Drama", release_date: DateTime.strptime("02/16/2020", "%m/%d/%Y"), score: 1.5, in_theaters: true, rate: "PG-13"})

movie13 = Movie.create!({title: "Ocean's Eleven", synopsis: "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.", runtime: "116 min", 
genre: "Action", release_date: DateTime.strptime("11/7/2020", "%m/%d/%Y"), score: 2.2, coming_soon: true, rate: "PG-13"})

movie14 = Movie.create!({title: "Marvel's Avengers", synopsis: "An intergallactic battle between human and bugs", runtime: "143 min", 
genre: "Action", release_date: DateTime.strptime("05/4/2012", "%m/%d/%Y"), score: 4.2, on_dvd: true, rate: "PG-13"})

movie15 = Movie.create!({title: "The Town", synopsis: "A longtime thief, planning his next job, tries to balance his feelings for a bank manager connected to an earlier heist", runtime: "125 min", 
genre: "Action", release_date: DateTime.strptime("11/7/1997", "%m/%d/%Y"), score: 3.9, in_theaters: true, rate: "R"})


# actors

Actor.destroy_all

actor1 = Actor.create!({first_name: "Bradley", last_name: "Cooper"})
actor2 = Actor.create!({first_name: "Jennifer", last_name: "Lawrence"})
actor3 = Actor.create!({first_name: "Matt", last_name: "Damon"})
actor4 = Actor.create!({first_name: "Christian", last_name: "Bale"})
actor5 = Actor.create!({first_name: "Rebecca", last_name: "Hall"})
actor6 = Actor.create!({first_name: "Brad", last_name: "Pitt"})
actor7 = Actor.create!({first_name: "Ben", last_name: "Affleck"})
actor8 = Actor.create!({first_name: "Jeremy", last_name: "Renner"})
actor9 = Actor.create!({first_name: "Tom", last_name: "Hardy"})
actor10 = Actor.create!({first_name: "Robert", last_name: "Downey Jr."})
actor11 = Actor.create!({first_name: "Anne", last_name: "Hathaway"})
actor12 = Actor.create!({first_name: "Leonardo", last_name: "Dicaprio"})
actor13 = Actor.create!({first_name: "Ellen", last_name: "Page"})
actor14 = Actor.create!({first_name: "Joseph", last_name: "Gordon-Levitt"})
actor15 = Actor.create!({first_name: "Kate", last_name: "Winslett"})
actor16 = Actor.create!({first_name: "Scarlett", last_name: "Johansson"})
actor17 = Actor.create!({first_name: "Liam", last_name: "Hemsworth"})
actor18 = Actor.create!({first_name: "Robert", last_name: "De Niro"})
actor19 = Actor.create!({first_name: "Matthew", last_name: "McConaughey"})
actor20 = Actor.create!({first_name: "George", last_name: "Clooney"})
actor23 = Actor.create!({first_name: "Heath", last_name: "Ledger"})
actor24 = Actor.create!({first_name: "Morgan", last_name: "Freeman"})
actor25 = Actor.create!({first_name: "Laurence", last_name: "Fishburne"})
actor26 = Actor.create!({first_name: "Kathy", last_name: "Bates"})
actor28 = Actor.create!({first_name: "Gwyneth", last_name: "Paltrow"})
actor29 = Actor.create!({first_name: "Black", last_name: "Lively"})
actor30 = Actor.create!({first_name: "Victor", last_name: "Garber"})
actor31 = Actor.create!({first_name: "Keanu", last_name: "Reeves"})
actor32 = Actor.create!({first_name: "Carrie-Anne", last_name: "Moss"})
actor33 = Actor.create!({first_name: "Hugh", last_name: "Jackman"})



# reviews

Review.destroy_all

review1 = Review.create!({author_id: user1.id, movie_id: movie1.id, body: "The film's true strength is a snappy, whip-smart wit", score: 4.0})
review2 = Review.create!({author_id: user2.id, movie_id: movie2.id, body: "Lose yourself in Chris Nolan's dream-world. You may never want to wake up.", score: 4.3})
review3 = Review.create!({author_id: user3.id, movie_id: movie3.id, body: "An exceptionally smart, brooding picture with some terrific performances.", score: 5.0})
review4 = Review.create!({author_id: user4.id, movie_id: movie4.id, body: "The results are both dazzling and intimate, clever and - during one tour-de-force sequence - spectacularly funny.", score: 4.2})
review5 = Review.create!({author_id: user5.id, movie_id: movie5.id, body: "It's the kind of movie that just doesn't come along that often.", score: 4.9})
review6 = Review.create!({author_id: user6.id, movie_id: movie6.id, body: "The film addresses its grim subject in a cool, matter-of-fact way.", score: 4.1})
review7 = Review.create!({author_id: user7.id, movie_id: movie7.id, body: "This is one of the most beautiful films I have ever seen.", score: 4.9})
review8 = Review.create!({author_id: user8.id, movie_id: movie8.id, body: "So rousingly, so emotionally, and so incalculably gratifying.", score: 4.8})
review9 = Review.create!({author_id: user9.id, movie_id: movie9.id, body: "Fun, charming, but slight - and way too long and flabby in the girth for such slightness.", score: 4.2})
review10 = Review.create!({author_id: user10.id, movie_id: movie10.id, body: "Seeing it a second time has made me love it even more, not always the case.", score: 4.5})
review11 = Review.create!({author_id: user1.id, movie_id: movie11.id, body: "The movie is nonsense, but it does achieve a brazenly chic high style -- black-on-black, airborne, spasmodic.", score: 4.1})
review12 = Review.create!({author_id: user2.id, movie_id: movie12.id, body: "Two years after Jennifer Lawrence appeared in David O. Russell's American Hustle, she gets to show some.", score: 3.8})
review13 = Review.create!({author_id: user3.id, movie_id: movie13.id, body: "Extremely slick yet consistently entertaining...", score: 3.7})
review14 = Review.create!({author_id: user4.id, movie_id: movie14.id, body: "A spectacle in the grandest sense of the word ...", score: 3.6})
review15 = Review.create!({author_id: user5.id, movie_id: movie15.id, body: "A top notch action flick undone by flashes of ego.", score: 3.5})
review16 = Review.create!({author_id: user6.id, movie_id: movie1.id, body: "Iron Man 3 is action-packed, funny and entertaining.", score: 3.4})
review17 = Review.create!({author_id: user7.id, movie_id: movie2.id, body: "A mind-bending thriller that is a complete original, cementing Nolan's status as one of this generation's brightest filmmakers.", score: 3.2})
review18 = Review.create!({author_id: user8.id, movie_id: movie3.id, body: "Christopher Nolan is much, much smarter than your average filmmaker.", score: 3.1})
review19 = Review.create!({author_id: user9.id, movie_id: movie4.id, body: "One of the stronger comic book films to emerge from Marvel.", score: 3.0})
review20 = Review.create!({author_id: user10.id, movie_id: movie5.id, body: "A great film and the capstone of Cameron's directoral career, although I like almost everything else he did better.", score: 2.9})
review21 = Review.create!({author_id: user1.id, movie_id: movie6.id, body: "A cure for boredom.", score: 3.8})
review22 = Review.create!({author_id: user2.id, movie_id: movie7.id, body: "Interstellar may be a preposterous epic, but it is an epic nonetheless.", score: 3.7})
review23 = Review.create!({author_id: user3.id, movie_id: movie8.id, body: "The Dark Knight Rises caps off the trilogy with a high but bittersweet note.", score: 3.6})
review24 = Review.create!({author_id: user4.id, movie_id: movie9.id, body: "The story stumbles ever so slight but it is ultimately fun, brilliantly acted and incredibly stylish.", score: 2.5})
review25 = Review.create!({author_id: user5.id, movie_id: movie10.id, body: "Wouldn't it be great if mental illness really was as adorable as it is in the movies?", score: 2.4})
review26 = Review.create!({author_id: user6.id, movie_id: movie11.id, body: "Another slice of overlong, high concept hokum.", score: 2.3})
review27 = Review.create!({author_id: user7.id, movie_id: movie12.id, body: "No matter how much this film tries to big itself up, it's still about a woman who re-invented the mop.", score: 2.2})
review28 = Review.create!({author_id: user8.id, movie_id: movie13.id, body: "Whatever you do, don't pay attention.", score: 2.1})
review29 = Review.create!({author_id: user9.id, movie_id: movie14.id, body: "I think the problem is inherent in the format.", score: 2.0})
review30 = Review.create!({author_id: user10.id, movie_id: movie15.id, body: "My biggest concern with The Town is the glorification of robbery.", score: 1.9})
review31 = Review.create!({author_id: user1.id, movie_id: movie14.id, body: "I think the problem is inherent in the format.", score: 1.8})
review32 = Review.create!({author_id: user2.id, movie_id: movie13.id, body: "When all the cards have been turned over, nothing seems to be at stake in this movie...Has the feel of a put-on. It put me off.", score: 1.7})
review33 = Review.create!({author_id: user3.id, movie_id: movie12.id, body: "There are many good materials and scenes in Joy, but the movie suffers from two problems that keep it from becoming truly successful.", score: 1.6})
review34 = Review.create!({author_id: user4.id, movie_id: movie11.id, body: "There's not much humor to keep it all life-size, and by the final stretch it's become bloated, mechanical, and tiresome.", score: 1.5})
review35 = Review.create!({author_id: user5.id, movie_id: movie10.id, body: "I love the work that deNiro and Lawrence do here, but ultimately all they do is prove the old adage that you can cover up a lot of problems with the script by hiring good actors.", score: 1.4})
review36 = Review.create!({author_id: user6.id, movie_id: movie9.id, body: "I'd love to recommend it for everything it is, but I find myself arguing against it for many of those same reasons.", score: 1.3})
review37 = Review.create!({author_id: user7.id, movie_id: movie8.id, body: "The story is dense, overlong, and studded with references that will make sense only to those intimate with Nolan's previous excursions into Batmanhood.", score: 1.2})
review38 = Review.create!({author_id: user8.id, movie_id: movie7.id, body: "Interstellar is 120 minutes of good movie stuffed into 170 minutes.", score: 1.1})
review39 = Review.create!({author_id: user9.id, movie_id: movie6.id, body: "This feels more like a failed experiment.", score: 0.9})
review40 = Review.create!({author_id: user10.id, movie_id: movie5.id, body: "Director James Cameron takes one of his most beloved historical incidents and transforms it in to a McDonald's product...", score: 0.8})
review41 = Review.create!({author_id: user1.id, movie_id: movie4.id, body: "Much of this takes place in the early 1970s, which gives the filmmakers an excuse to haul out lots of vintage kitsch and make some rather tasteless references to the Vietnam war.", score: 0.7})
review42 = Review.create!({author_id: user2.id, movie_id: movie3.id, body: "It seems almost cruel to take beloved child archetypes and turn them into projections for adult angst.", score: 0.6})
review43 = Review.create!({author_id: user3.id, movie_id: movie2.id, body: "The main tension of the story is a constant vuvuzela-like interruption in the suspension of disbelief.", score: 0.5})
review44 = Review.create!({author_id: user4.id, movie_id: movie1.id, body: "The action, directed by Shane Black, ranges from passable to interminable.", score: 0.4})
review45 = Review.create!({author_id: user5.id, movie_id: movie15.id, body: "Affleck gets the tone mostly right (his use of natural lighting in the film's final stretch is impressive), but he has yet to completely find his footing as a director.", score: 0.3})

Casting.destroy_all

# Iron Man3
casting1 = Casting.create!({actor_id: actor10.id, movie_id: movie1.id, cast_ord: 1})
casting2 = Casting.create!({actor_id: actor28.id, movie_id: movie1.id, cast_ord: 2})
casting3 = Casting.create!({actor_id: actor5.id, movie_id: movie1.id, cast_ord: 3})

# Inception
casting4 = Casting.create!({actor_id: actor12.id, movie_id: movie2.id, cast_ord: 1})
casting5 = Casting.create!({actor_id: actor13.id, movie_id: movie2.id, cast_ord: 2})
casting6 = Casting.create!({actor_id: actor14.id, movie_id: movie2.id, cast_ord: 3})
casting7 = Casting.create!({actor_id: actor9.id, movie_id: movie2.id, cast_ord: 4})

#The Dark Knight
casting8 = Casting.create!({actor_id: actor4.id, movie_id: movie3.id, cast_ord: 1})
casting9 = Casting.create!({actor_id: actor23.id, movie_id: movie3.id, cast_ord: 2})
casting10 = Casting.create!({actor_id: actor24.id, movie_id: movie3.id, cast_ord: 3})

#X-Men: Days Of Future Past 
casting11 = Casting.create!({actor_id: actor33.id, movie_id: movie4.id, cast_ord: 1})          
casting12 = Casting.create!({actor_id: actor2.id, movie_id: movie4.id, cast_ord: 2})
casting13 = Casting.create!({actor_id: actor13.id, movie_id: movie4.id, cast_ord: 3})


#Titanic 
casting15 = Casting.create!({actor_id: actor12.id, movie_id: movie5.id, cast_ord: 1})
casting16 = Casting.create!({actor_id: actor30.id, movie_id: movie5.id, cast_ord: 2})
casting17 = Casting.create!({actor_id: actor26.id, movie_id: movie5.id, cast_ord: 3})


# Contagion
casting18 = Casting.create!({actor_id: actor3.id, movie_id: movie6.id, cast_ord: 2})
casting19 = Casting.create!({actor_id: actor25.id, movie_id: movie6.id, cast_ord: 3})
casting20 = Casting.create!({actor_id: actor28.id, movie_id: movie6.id, cast_ord: 4})
casting21 = Casting.create!({actor_id: actor15.id, movie_id: movie6.id, cast_ord: 5})

#Interstellar
casting22 = Casting.create({actor_id: actor19.id, movie_id: movie7.id, cast_ord: 1})
casting23 = Casting.create({actor_id: actor11.id, movie_id: movie7.id, cast_ord: 2})
casting24 = Casting.create({actor_id: actor3.id, movie_id: movie7.id, cast_ord: 3})

#The Dark Knight: Rises
casting25 = Casting.create({actor_id: actor4.id, movie_id: movie8.id, cast_ord: 1})
casting26 = Casting.create({actor_id: actor11.id, movie_id: movie8.id, cast_ord: 2})
casting27 = Casting.create({actor_id: actor9.id, movie_id: movie8.id, cast_ord: 3})
casting28 = Casting.create({actor_id: actor14.id, movie_id: movie8.id, cast_ord: 4})
casting29 = Casting.create({actor_id: actor24.id, movie_id: movie8.id, cast_ord: 5})

# American Hustle 
casting30 = Casting.create({actor_id: actor4.id, movie_id: movie9.id, cast_ord: 1})
casting31 = Casting.create({actor_id: actor2.id, movie_id: movie9.id, cast_ord: 2})
casting32 = Casting.create({actor_id: actor1.id, movie_id: movie9.id, cast_ord: 3})
casting33 = Casting.create({actor_id: actor8.id, movie_id: movie9.id, cast_ord: 4})

#Silver Linings Playbook 
casting34 = Casting.create({actor_id: actor1.id, movie_id: movie10.id, cast_ord: 1})
casting35 = Casting.create({actor_id: actor2.id, movie_id: movie10.id, cast_ord: 2})
casting36 = Casting.create({actor_id: actor18.id, movie_id: movie10.id, cast_ord: 3})

#Matrix 
casting37 = Casting.create({actor_id: actor31.id, movie_id: movie11.id, cast_ord: 1})
casting38 = Casting.create({actor_id: actor32.id, movie_id: movie11.id, cast_ord: 2})
casting39 = Casting.create({actor_id: actor25.id, movie_id: movie11.id, cast_ord: 3})

#Joy 
casting40 = Casting.create({actor_id: actor2.id, movie_id: movie12.id, cast_ord: 1})
casting41 = Casting.create({actor_id: actor18.id, movie_id: movie12.id, cast_ord: 2})
casting42 = Casting.create({actor_id: actor1.id, movie_id: movie12.id, cast_ord: 3})

#Ocean's Eleven 
casting43 = Casting.create({actor_id: actor20.id, movie_id: movie13.id, cast_ord: 1})
casting44 = Casting.create({actor_id: actor3.id, movie_id: movie13.id, cast_ord: 2})
casting45 = Casting.create({actor_id: actor6.id, movie_id: movie13.id, cast_ord: 3})


#Marvel's Avenger's
casting46 = Casting.create({actor_id: actor10.id, movie_id: movie14.id, cast_ord: 1})
casting47 = Casting.create({actor_id: actor16.id, movie_id: movie14.id, cast_ord: 2})
casting49 = Casting.create({actor_id: actor17.id, movie_id: movie14.id, cast_ord: 3})
casting50 = Casting.create({actor_id: actor28.id, movie_id: movie14.id, cast_ord: 4})
casting51 = Casting.create({actor_id: actor8.id, movie_id: movie14.id, cast_ord: 5})

#The Town 
casting52 = Casting.create({actor_id: actor7.id, movie_id: movie15.id, cast_ord: 1})
casting53 = Casting.create({actor_id: actor5.id, movie_id: movie15.id, cast_ord: 2})
casting54 = Casting.create({actor_id: actor8.id, movie_id: movie15.id, cast_ord: 3})












