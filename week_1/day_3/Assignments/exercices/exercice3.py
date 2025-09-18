# 🌟 Exercise 3 : Who’s the song producer?
# Instructions
# 1. Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# 2. Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
class Song:
    def __init__(self,lyrics):
        self.lyrics=lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)
# 3. Create an object, for example:
stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# 4. Then, call the sing_me_a_song method. The output should be:
stairway.sing_me_a_song()
# There’s a lady who's sure

# all that glitters is gold

# and she’s buying a stairway to heaven