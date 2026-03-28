import * as apiModel from './api';
import * as viewModel from './project.vm';
import {
  mapEmployeeSummaryFromApiToVm,
  mapEmployeeSummaryListFromApiToVm,
  mapProjectFromApiToVm,
} from './project.mapper';

describe('mapEmployeeSummaryFromApiToVm', () => {
  it('should map an employee summary from api to vm', () => {
    // Arrange
    const apiEmployee: apiModel.EmployeeSummary = {
      id: '1',
      isAssigned: true,
      employeeName: 'Ángela Real',
    };

    // Act
    const result = mapEmployeeSummaryFromApiToVm(apiEmployee);

    // Assert
    const expectedResult: viewModel.EmployeeSummary = {
      id: '1',
      isAssigned: true,
      employeeName: 'Ángela Real',
    };
    expect(result).toEqual(expectedResult);
  });

  it('should handle optional properties correctly', () => {
    // Arrange
    const apiEmployee: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'Ángela Real',
    };

    // Act
    const result = mapEmployeeSummaryFromApiToVm(apiEmployee);

    // Assert
    expect(result.id).toBe('1');
    expect(result.isAssigned).toBeUndefined();
    expect(result.employeeName).toBe('Ángela Real');
  });
});

describe('mapEmployeeSummaryListFromApiToVm', () => {
  it.each<{ employees: apiModel.EmployeeSummary[] | null | undefined }>([
    { employees: undefined },
    { employees: null },
    { employees: [] },
  ])(
    'should return empty array when employees equals $employees',
    ({ employees }) => {
      // Act
      const result = mapEmployeeSummaryListFromApiToVm(employees);

      // Assert
      const expectedResult: viewModel.EmployeeSummary[] = [];
      expect(result).toEqual(expectedResult);
    }
  );

  it('should map an array with one employee correctly', () => {
    // Arrange
    const employees: apiModel.EmployeeSummary[] = [
      { id: '1', isAssigned: true, employeeName: 'Ángela Real' },
    ];

    // Act
    const result = mapEmployeeSummaryListFromApiToVm(employees);

    // Assert
    const expectedResult: viewModel.EmployeeSummary[] = [
      { id: '1', isAssigned: true, employeeName: 'Ángela Real' },
    ];
    expect(result).toEqual(expectedResult);
  });

  it('should map an array with multiple employees correctly', () => {
    // Arrange
    const employees: apiModel.EmployeeSummary[] = [
      { id: '1', isAssigned: true, employeeName: 'Ángela Real' },
      { id: '2', isAssigned: false, employeeName: 'Antonio Contreras' },
      { id: '3', employeeName: 'Braulio Diez' },
    ];

    // Act
    const result = mapEmployeeSummaryListFromApiToVm(employees);

    // Assert
    const expectedResult: viewModel.EmployeeSummary[] = [
      { id: '1', isAssigned: true, employeeName: 'Ángela Real' },
      { id: '2', isAssigned: false, employeeName: 'Antonio Contreras' },
      { id: '3', employeeName: 'Braulio Diez' },
    ];
    expect(result).toHaveLength(3);
    expect(result[0]).toEqual(expectedResult[0]);
    expect(result[1]).toEqual(expectedResult[1]);
    expect(result[2]).toEqual(expectedResult[2]);
  });
});

describe('mapProjectFromApiToVm', () => {
  it.each<{
    project: apiModel.Project | null | undefined;
    description: string;
  }>([
    { project: undefined, description: 'undefined' },
    { project: null, description: 'null' },
  ])(
    'should return empty project when project is $description',
    ({ project }) => {
      // Arrange
      const emptyProject: viewModel.Project = {
        id: '',
        name: '',
        externalId: '',
        comments: '',
        isActive: false,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual(emptyProject);
    }
  );

  it('should map a project without employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [],
    };
    expect(result).toEqual(expectedResult);
  });

  it('should map a project with employees', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false,
        },
        {
          id: '3',
          employeeName: 'Javier Benitez',
          isAssigned: false,
        },
        {
          id: '4',
          employeeName: 'María Peña',
          isAssigned: true,
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      comments: 'Comentario',
      externalId: '1234',
      employees: [
        {
          id: '1',
          employeeName: 'Daniel Perez',
          isAssigned: true,
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false,
        },
        {
          id: '3',
          employeeName: 'Javier Benitez',
          isAssigned: false,
        },
        {
          id: '4',
          employeeName: 'María Peña',
          isAssigned: true,
        },
      ],
    };

    expect(result).toEqual(expectedResult);
  });

  it('should map a project with missing optional properties', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Nombre',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result.id).toBe('1');
    expect(result.name).toBe('Nombre');
    expect(result.isActive).toBe(true);
    expect(result.externalId).toBeUndefined();
    expect(result.comments).toBeUndefined();
    expect(result.employees).toEqual([]);
  });
});
