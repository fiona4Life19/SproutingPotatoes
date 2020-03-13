# README

# Sprouting Potatoes 

[Sprouting Potatoes Live](https://sproutingpotatoes.herokuapp.com/#/)

Sprouting Potatoes live is a full stack web application inspired by Rotten Tomatoes. Sprouting Potatoes uses PostgreSQL 12 database for storage. Sprouting Potatoes incorperates the framework Ruby on Rails in the backend and React and Redux on the front. 


# Features and Implementation 

## Index of Movies 

Sprouting Potatoes features an index of all the movies in the database dispayed on clickable card elements that redirect a user to the show page for that specified movie. 

![Index](/app/assets/images/index.png) 


## Show Page 

The Sprouting Potatoes show page three sections the first being details about a movie. The second and third sections feature a list of actors for that movie, and a collection of reviews. 

![Show](/app/assets/images/show.png) 

## Carousuel 

The Sprouting Potatoes home page has a carousuel that allows a user to scroll through movie trailers.

![trailer](/app/assets/images/trailer.png) 


# Challanges 

One of my main challenges while programming Sprouting Potatoes was getting my Carousel to increment slides. The solution to my problem was to refactor my code and add a variable to increment my index. 

```Javascript
previousSlide(e) {
        e.preventDefault()
        let index = this.state.activeIndex;
        let slidesLength = imgUrls.length

        if (index < 1) {
            index = slidesLength
        }

        index -=1;

        this.setState({
            activeIndex: index
        })
    }
```



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
# FullStack
