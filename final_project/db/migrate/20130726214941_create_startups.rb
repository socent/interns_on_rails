class CreateStartups < ActiveRecord::Migration
  def change
    create_table :startups do |t|
      t.string :company_name
      t.string :country
      t.string :city
      t.string :industry
      t.string :address
      t.string :email

      t.timestamps
    end
  end
end
