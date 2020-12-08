class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
    :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

    has_secure_password
    has_many :videos

    validates :username, :email, uniqueness: true

end
