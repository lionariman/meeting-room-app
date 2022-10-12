import './App.css';

const App = () => {
  return (
    <div>
      <h1>Настройка переговорной комнаты</h1>
      <h3>Перед началом работы необходимо привязать устройство</h3>

      <label for="meetingRoomAddress">Выберите адрес переговорной комнаты</label>
      <select id="meetingRoomAddress" name="meetingRoomAddress">
      </select>

      <label for="meetingRoomFloor">Выберите этаж переговорной комнаты</label>
      <select id="meetingRoomFloor" name="meetingRoomFloor">
      </select>

      <label for="meetingRoomNumber">Выберите номер переговорной комнаты</label>
      <select id="meetingRoomNumber" name="meetingRoomNumber">
      </select>

      <input type="submit" value="Submit" />
    </div>
  );
}

export default App;
