class User < ApplicationRecord

    validates( 
        :first_name, :last_name, :email, :password_digest, :session_token,
        presence: true
    ) 
    
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    attr_reader :password


    has_many :reviews,
        foreign_key: :author_id, 
        class_name: :Review


    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email) 
        user && user.is_password?(password) ? user : nil
    end 

    def password=(password) 
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end  

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end  

    def reset_session_token!
        self.update!(session_token: SecureRandom.base64(16))
        self.session_token
    end  

    private 

    def ensure_session_token 
        self.session_token ||= SecureRandom.base64(16)
    end  

end

