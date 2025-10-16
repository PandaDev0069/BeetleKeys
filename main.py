import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.gridlayout import GridLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button

class MyGrid(GridLayout):
    # Initialize infinite keywords
    def __init__(self, **kwargs):
        # Call Grid layout constructor
        super(MyGrid, self).__init__(**kwargs)

        # Set Columns
        self.cols = 1

        # Add Widgets
        self.add_widget(Label(text="Input"))
        # Add Input Box
        self.input = TextInput(multiline=True)
        self.add_widget(self.input)
class BeetleKeys(App):
    def build(self):
        return MyGrid()

if __name__ == '__main__':
    BeetleKeys().run()