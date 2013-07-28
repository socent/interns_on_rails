class Intern < ActiveRecord::Base
  authenticates_with_sorcery!
  # attr_accessible :title, :body

  # has_many :applications
  # has_many :resumes

  validates :first_name, :presence => true
  validates :last_name, :presence => true
  validates :email, :presence => true, uniqueness: true
  validates :password, :presence => true, :on => :create

  def name
    "#{first_name} #{last_name}"
  end
end
