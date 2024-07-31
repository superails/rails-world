# == Schema Information
#
# Table name: speakers
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Speaker < ApplicationRecord
  has_one :profile, as: :profileable, dependent: :destroy

  has_and_belongs_to_many :events

  [:name, :bio, :job_title, :github_url, :twitter_url, :linkedin_url].each do |attr|
    delegate attr, "#{attr}=", to: :profile, allow_nil: true
  end

  def profile
    super || build_profile
  end
end
