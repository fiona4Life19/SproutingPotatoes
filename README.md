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

## Carousuel

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

## Modal 

A second challange I faced was trying to make my signin/signout modal work on both my home and show page. The solution to this was to add a header tag in my App.jsx to render the modal and greeting container on every page.


```Javascipt
const App = () => {
    return (
    <div>
        <header>
           < Modal/>
           < GreetingContainer/>
        </header>

        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path= "/signin" component={SignInFormContainer} />
            <Route path="/movies/:movieId" component={MovieShowContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
    )
}
```

# Future Directions 

* Profile Page - A User will be able to create and edit a profile
       
* AWS implementation - Spouting Potatoes will contain storage on AWS for tailers and images that link to movies and actors

* Actors Show Page - A show page that will list information about an actor including there 




