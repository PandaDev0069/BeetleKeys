import kivy
from kivy.app import App
from kivy.uix.label import Label
class BeetleKeys(App):
    def build(self):
        return Label(text='Hello, Kivy!', font_size=50)

if __name__ == '__main__':
    BeetleKeys().run()