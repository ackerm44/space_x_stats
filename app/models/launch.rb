class Launch < ApplicationRecord
  belongs_to :launchpad
  belongs_to :rocket
end
