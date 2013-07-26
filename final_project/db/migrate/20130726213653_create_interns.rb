class CreateInterns < ActiveRecord::Migration
  def change
    create_table :interns do |t|
      t.string :first_name
      t.string :last_name
      t.string :dob
      t.string :industry_choice
      t.string :email
      t.string :country
      t.string :city

      t.timestamps
    end
  end
end
