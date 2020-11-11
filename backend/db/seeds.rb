require 'uuid'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
uuid = UUID.new

larry = User.create({username: 'Larry', email: 'larry@stooges.com', password: 'Larry', uid: uuid.generate})
curly = User.create({username: 'Curly', email: 'curly@stooges.com', password: 'Curly', uid: uuid.generate})
moe = User.create({username: 'Moe', email: 'moe@stooges.com', password: 'Moe', uid: uuid.generate})

video1 = Video.create({title: 'my first video', url:'https://www.youtube.com/watch?v=MhG2bVXTyHQ', uid: uuid.generate})
video2 = Video.create({title: 'my second video', url:'https://youtu.be/a5r14_aXA4I', uid: uuid.generate})
video3 = Video.create({title: 'my third video', url:'https://youtu.be/FkGK7bitav0', uid: uuid.generate})
video4 = Video.create({title: 'my fourth video', url:'https://www.youtube.com/watch?v=LyC855KdBKo', uid: uuid.generate})
video5 = Video.create({title: 'my fifth video', url:'https://www.youtube.com/watch?v=oPVte6aMprI', uid: uuid.generate})
video6 = Video.create({title: 'my sixth video', url:'https://www.youtube.com/watch?v=j-2ZxldMO-M', uid: uuid.generate})
video7 = Video.create({title: 'my seventh video', url:'https://www.youtube.com/watch?v=WGaICSbCr1c', uid: uuid.generate})
video8 = Video.create({title: 'my eighth video', url:'https://www.youtube.com/watch?v=l9_-2oG4Cc0', uid: uuid.generate})
video9 = Video.create({title: 'my ninth video', url:'https://www.youtube.com/watch?v=-etNtlr576E', uid: uuid.generate})

larry.videos << [video1, video2, video3]
curly.videos << [video4, video5, video6]
moe.videos << [video7, video8, video9]

