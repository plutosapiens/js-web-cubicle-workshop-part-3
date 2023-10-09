const Cube = require('./../models/Cube');
const cubes = [];

exports.create = async (cubeData) => {
  const cube = await Cube.create(cubeData);
  return cube;
}

exports.getAll = async (search, from, to) => {
  let filterCubes = await Cube.find().lean(); //lean() за да можем да си видим обектите на страницата

  //TODO: Filter with Mongoose
  if(search) {
    filterCubes = filterCubes.filter((cube) => cube.name.toLowerCase().includes(search));
  }
  if(from) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if(to) {
    filterCubes = filterCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }
    return filterCubes;
};

exports.getSingleCube = (id) => Cube.findById(id).populate("accessories");

exports.attachAccessory = async (cubeId, accessoryId) => {
  const cube = await this.getSingleCube(cubeId);
  cube.accessories.push(accessoryId);

  return cube.save();
};
