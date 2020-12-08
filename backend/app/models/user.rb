class User < ApplicationRecord

  devise :database_authenticatable, :registerable

    has_secure_password
    has_many :videos

    validates :username, :email, uniqueness: true

end
