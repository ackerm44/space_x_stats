# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180313160402) do

  create_table "launches", force: :cascade do |t|
    t.float "flight_number"
    t.float "year"
    t.datetime "launch_date"
    t.string "rocket"
    t.string "launchpad"
    t.string "patch_image"
    t.string "article_link"
    t.string "video_link"
    t.text "details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "launchpads", force: :cascade do |t|
    t.string "name"
    t.string "status"
    t.string "location_name"
    t.string "location_region"
    t.float "latitude"
    t.float "longitude"
    t.text "details"
  end

  create_table "rockets", force: :cascade do |t|
    t.string "name"
    t.float "cost_per_launch"
    t.float "height"
    t.float "diameter"
    t.float "mass"
    t.float "number_of_engines"
    t.string "engine_type"
    t.text "description"
  end

end
