const Accommodation = require("../model/accommodation");

class AccommodationService {
  async getAll(page = 0, size = 10) {
    const skip = page * size;
    const totalElements = await Accommodation.countDocuments();
    const content = await Accommodation.find().skip(skip).limit(size);
    return { content, totalElements };
  }

  async getById(id) {
    return Accommodation.findById(id);
  }

  async create(data) {
    const accommodation = new Accommodation(data);
    return accommodation.save();
  }

  async update(id, data) {
    return Accommodation.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return Accommodation.findByIdAndDelete(id);
  }
}

module.exports = new AccommodationService();
