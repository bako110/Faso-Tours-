const Structure = require('../model/structure');

class StructureService {
  async getAll() {
    return Structure.find();
  }

  async getById(id) {
    return Structure.findById(id);
  }

  async create(data) {
    const structure = new Structure(data);
    return structure.save();
  }

  async update(id, data) {
    return Structure.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return Structure.findByIdAndDelete(id);
  }
}

module.exports = new StructureService();
