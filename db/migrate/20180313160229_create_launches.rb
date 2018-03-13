class CreateLaunches < ActiveRecord::Migration[5.1]
  def change
    create_table :launches do |t|
      t.float :flight_number
      t.float :year
      t.datetime :launch_date
      t.string :rocket
      t.string :launchpad
      t.string :patch_image
      t.string :article_link
      t.string :video_link
      t.text :details

      t.timestamps
    end
  end
end
