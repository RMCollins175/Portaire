### Project Indigo Charlie

This app is a CRA. I used standard css stylesheets for styling. For testing, I used `jest` and `react-testing-library`. You can view this project at

Alternatively, you can clone this repo and run the following scripts:

- `yarn` to install dependencies
- `yarn dev` to run the local server and view in http://localhost:3000/
- `yarn test` to run the unit and integration tests
- `yarn lint` to lint the project

## Notes

I would have liked to spend more time on this but my time was limited. Here are some considerations and things I would have liked to do with more time:

- with more time would have added more tests
- adding a decent loading and error message or modal
- tried tailwind or some other styling framework

## Requirements

- [x] Open the design: Figma file
- [x] Set up a react app - use CRA or Vite
- [x] Code the necessary components
- [x] Populate the component (GET request) with data from this API endpoint
- [x] If by chance the API gives you more than one element in response, choose one at random
- [x] Modal element on screen two should be launched by clicking the button on screen one, and should auto populate from the API
- [x] Country should not auto-populate so should be selected manually by the user
- [x] Card details should not auto-populate so should be entered manually by the user
- [] Please validate the card details:
  basic version: plain check - is it a number with proper number of digits
  ambitious version: Luhn algorithm
- [x] Clicking 'Update' should send (POST request) the form details Here
      Make a pull request to this repo

### Other considerations - styling

- why do the address inputs have extra padding.
- the state input right border is covered by the left border of postcode
- The select dropdown is hard to style
- I'm not sure why the error validation messages are not showing up
