json.review do 
    json.partial! "/api/reviews/review", review: @review
end 


json.author do
    json.partial! "/api/review/review", review: @review.author_id
end 