   // Sample Data for the States, Districts, and Cities based on Location
   const locationData = {
       Location1: {
           states: ['State1', 'State2'],
           districts: {
               'State1': ['District1', 'District2'],
               'State2': ['District3', 'District4']
           },
           cities: {
               'District1': ['City1', 'City2'],
               'District2': ['City3', 'City4'],
               'District3': ['City5', 'City6'],
               'District4': ['City7', 'City8']
           }
       },
       Location2: {
           states: ['State3', 'State4'],
           districts: {
               'State3': ['District5', 'District6'],
               'State4': ['District7', 'District8']
           },
           cities: {
               'District5': ['City9', 'City10'],
               'District6': ['City11', 'City12'],
               'District7': ['City13', 'City14'],
               'District8': ['City15', 'City16']
           }
       },
       Location3: {
           states: ['State5', 'State6'],
           districts: {
               'State5': ['District9', 'District10'],
               'State6': ['District11', 'District12']
           },
           cities: {
               'District9': ['City17', 'City18'],
               'District10': ['City19', 'City20'],
               'District11': ['City21', 'City22'],
               'District12': ['City23', 'City24']
           }
       }
   };

   // Event listener for Location dropdown change
   document.getElementById('location').addEventListener('change', function() {
       const location = this.value;

       // Clear the previous state, district, and city options
       clearOptions('state');
       clearOptions('district');
       clearOptions('city');

       // Populate state dropdown based on the selected location
       if (location && locationData[location]) {
           populateDropdown('state', locationData[location].states);
       }
   });

   // Event listener for State dropdown change
   document.getElementById('state').addEventListener('change', function() {
       const state = this.value;
       const location = document.getElementById('location').value;

       // Clear previous district and city options
       clearOptions('district');
       clearOptions('city');

       // Populate district dropdown based on the selected state and location
       if (state && location && locationData[location].districts[state]) {
           populateDropdown('district', locationData[location].districts[state]);
       }
   });

   // Event listener for District dropdown change
   document.getElementById('district').addEventListener('change', function() {
       const district = this.value;
       const location = document.getElementById('location').value;
       const state = document.getElementById('state').value;

       // Clear previous city options
       clearOptions('city');

       // Populate city dropdown based on the selected district, state, and location
       if (district && location && state && locationData[location].cities[district]) {
           populateDropdown('city', locationData[location].cities[district]);
       }
   });

   // Function to populate a dropdown with the given options
   function populateDropdown(id, options) {
       const select = document.getElementById(id);
       options.forEach(option => {
           const newOption = document.createElement('option');
           newOption.value = option;
           newOption.textContent = option;
           select.appendChild(newOption);
       });
   }

   // Function to clear options in a dropdown, keeping the default option
   function clearOptions(id) {
       const select = document.getElementById(id);
       while (select.options.length > 1) { // Keep the default "Select" option
           select.remove(1);
       }
   }
