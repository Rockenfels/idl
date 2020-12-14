class User < ApplicationRecord
    has_secure_password
    has_many :videos

    validates :username, :email, uniqueness: true

end
