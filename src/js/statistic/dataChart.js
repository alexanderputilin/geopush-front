export function getDataChart(data) {

  //Демка, вместо этого написать запросы

  if (data.type === 'device') {

    if (data.time === 'week') {
      return [{
        'device': 'Apple',
        'Numbers': 501
      }, {
        'device': 'Acer',
        'Numbers': 301
      }, {
        'device': 'Alcatel',
        'Numbers': 200
      }, {
        'device': 'Lenovo',
        'Numbers': 165
      }, {
        'device': 'HTC',
        'Numbers': 139
      }, {
        'device': 'Другие',
        'Numbers': 99
      }];
    }

    if (data.time === 'month') {
      return [{
        'device': 'Apple',
        'Numbers': 300
      }, {
        'device': 'Acer',
        'Numbers': 400
      }, {
        'device': 'Alcatel',
        'Numbers': 350
      }, {
        'device': 'Lenovo',
        'Numbers': 165.8
      }, {
        'device': 'HTC',
        'Numbers': 100.9
      }, {
        'device': 'Другие',
        'Numbers': 33
      }];
    }

    if (data.time === 'all') {
      return [{
        'device': 'Apple',
        'Numbers': 8000
      }, {
        'device': 'Acer',
        'Numbers': 3200
      }, {
        'device': 'Alcatel',
        'Numbers': 2000
      }, {
        'device': 'Lenovo',
        'Numbers': 2345
      }, {
        'device': 'HTC',
        'Numbers': 940
      }, {
        'device': 'Другие',
        'Numbers': 400
      }];
    }
  }


  if (data.type === 'local') {

    if (data.time === 'week') {
      return [{
        'city': 'Казань',
        'Numbers': 501
      }, {
        'city': 'Москва',
        'Numbers': 301
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 201
      }, {
        'city': 'Нижний Новгород',
        'Numbers': 165
      }, {
        'city': 'Саратов',
        'Numbers': 139
      }, {
        'city': 'Другие',
        'Numbers': 99
      }];
    }

    if (data.time === 'month') {
      return [{
        'city': 'Казань',
        'Numbers': 893
      }, {
        'city': 'Москва',
        'Numbers': 432
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 444
      }, {
        'city': 'Нижний Новгород',
        'Numbers': 900
      }, {
        'city': 'Саратов',
        'Numbers': 139.9
      }, {
        'city': 'Другие',
        'Numbers': 99
      }];
    }

    if (data.time === 'all') {
      return [{
        'city': 'Казань',
        'Numbers': 501
      }, {
        'city': 'Москва',
        'Numbers': 301
      }, {
        'city': 'Санкт-Петергбург',
        'Numbers': 201
      }, {
        'city': 'Нижний Новгород',
        'Numbers': 165
      }, {
        'city': 'Саратов',
        'Numbers': 139
      }, {
        'city': 'Другие',
        'Numbers': 99
      }]
    }
  }



  if (data.type === 'gender') {

    if (data.time === 'week') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 501
      }, {
        'gender': 'Женщины',
        'Numbers': 30
      }];
    }

    if (data.time === 'month') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 501
      }, {
        'gender': 'Женщины',
        'Numbers': 301
      }];
    }

    if (data.time === 'all') {
      return [{
        'gender': 'Мужчины',
        'Numbers': 501
      }, {
        'gender': 'Женщины',
        'Numbers': 301
      }];
    }
  }


  if (data.type === 'years') {

    if (data.time === 'week') {
      return [{
        'years': '18-24',
        'Numbers': 501.9
      }, {
        'years': '25-34',
        'Numbers': 301.9
      }, {
        'years': '35-44',
        'Numbers': 201.1
      }, {
        'years': '45-55',
        'Numbers': 165.8
      }, {
        'years': '> 55',
        'Numbers': 139.9
      }];
    }

    if (data.time === 'month') {
      return [{
        'years': '18-24',
        'Numbers': 501.9
      }, {
        'years': '25-34',
        'Numbers': 301.9
      }, {
        'years': '35-44',
        'Numbers': 201.1
      }, {
        'years': '45-55',
        'Numbers': 165.8
      }, {
        'years': '> 55',
        'Numbers': 139.9
      }];
    }

    if (data.time === 'all') {
      return [{
        'years': '18-24',
        'Numbers': 501.9
      }, {
        'years': '25-34',
        'Numbers': 301.9
      }, {
        'years': '35-44',
        'Numbers': 201.1
      }, {
        'years': '45-55',
        'Numbers': 165.8
      }, {
        'years': '> 55',
        'Numbers': 139.9
      }];
    }
  }


}