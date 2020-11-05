class CreateVideos < ActiveRecord::Migration[6.0]
  def change
    create_table :videos do |t|
      t.string :uid
      t.string :title
      t.string :url
      t.belongs_to :user
      t.timestamps
    end
  end
end
