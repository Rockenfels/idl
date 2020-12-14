# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :validatable

  has_many :videos

  validates :username, :email, uniqueness: true

  include DeviseTokenAuth::Concerns::User
end
