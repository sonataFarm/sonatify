class Track < ApplicationRecord
  validates :title, :url, :album_id, presence: true

  belongs_to :album
  has_many :playlistings
  has_many :playlists, through: :playlistings
  has_one :composer, through: :album
  has_many :performers, through: :album
end