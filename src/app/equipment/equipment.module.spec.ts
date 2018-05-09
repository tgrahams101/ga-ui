import { EquipmentModule } from './equipment.module';

describe('EquipmentModule', () => {
  let equipmentModule: EquipmentModule;

  beforeEach(() => {
    equipmentModule = new EquipmentModule();
  });

  it('should create an instance', () => {
    expect(equipmentModule).toBeTruthy();
  });
});
