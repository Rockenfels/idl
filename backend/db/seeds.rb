require 'uuid'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
uuid = UUID.new

larry = User.create({username: 'Larry', email: 'larry@stooges.com', password: 'larry', uid: uuid.generate})
curly = User.create({username: 'Curly', email: 'curly@stooges.com', password: 'curly', uid: uuid.generate})
moe = User.create({username: 'moe', email: 'moe@stooges.com', password: 'moe', uid: uuid.generate})

video1 = Video.create({title: 'my first video', url:'', uid: uuid.generate})
video2 = Video.create({title: 'my second video', url:'', uid: uuid.generate})
video3 = Video.create({title: 'my third video', url:'', uid: uuid.generate})
video4 = Video.create({title: 'my fourth video', url:'', uid: uuid.generate})
video5 = Video.create({title: 'my fifth video', url:'', uid: uuid.generate})
video6 = Video.create({title: 'my sixth video', url:'', uid: uuid.generate})
video7 = Video.create({title: 'my seventh video', url:'', uid: uuid.generate})
video8 = Video.create({title: 'my eighth video', url:'', uid: uuid.generate})
video9 = Video.create({title: 'my ninth video', url:'', uid: uuid.generate})

larry.videos << [video1, video2, video3]
curly.videos << [video4, video5, video6]
moe.videos << [video7, video8, video9]

