class Video < ApplicationRecord
    belongs_to :user

    validates [:url, :name], uniqueness: true
    
end
