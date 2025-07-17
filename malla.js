function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function cargarEstado() {
  const data = localStorage.getItem("estadoRamos");
  if (data) {
    Object.assign(estadoRamos, JSON.parse(data));
  }
}

const malla = [
      {
        semestre: 1,
        ramos: [
          { id: "MEDI_A001", nombre: "BASES Y FUNDAMENTOS DE LA MEDICINA" },
          { id: "MEDI_A002", nombre: "INTEGRACIÓN ABP I" },
          { id: "DBIO_1079", nombre: "BIOLOGÍA CELULAR" },
          { id: "DQUI_1044", nombre: "QUÍMICA GENERAL Y ORGÁNICA" },
          { id: "DMAE_M003", nombre: "BASES FISICOMATEMÁTICAS DE LA MEDICINA" },
          { id: "ASIGESAP01", nombre: "ESTRATEGIAS PARA EL APRENDIZAJE" },
        ]
      },
      {
        semestre: 2,
        ramos: [
          { id: "MEDI_B001", nombre: "HISTORIA DE LA MEDICINA UNIVERSAL Y CHILENA", prereq: ["MEDI_A001"] },
          { id: "MEDI_B002", nombre: "INTEGRACIÓN ABP II", prereq: ["MEDI_A002"] },
          { id: "MEDI_B003", nombre: "MORFO I", prereq: ["MEDI_A002"] },
          { id: "MEDI_B004", nombre: "SOPORTE BÁSICO VITAL", prereq: ["DBIO_1079"] },
          { id: "DBIO_1080", nombre: "BIOQUÍMICA GENERAL", prereq: ["DBIO_1079", "DQUI_1044"] },
          { id: "DBIO_1078", nombre: "BIOLOGÍA MOLECULAR Y GENÉTICA", prereq: ["DBIO_1079"] },
          { id: "FILS_0001", nombre: "ANTROPOLOGÍA"},
        ]
      },
      {
        semestre: 3,
        ramos: [
          { id: "MEDI_C001", nombre: "FISIOLOGIA MEDICA", prereq: ["DBIO_1078", "MEDI_B003", "DBIO_1080"] },
          { id: "MEDI_C002", nombre: "MORFO II", prereq: ["MEDI_B003", "DBIO_1078"] },
          { id: "MEDI_C003", nombre: "PSICOLOGIA APLICADA A LA MEDICINA GENERAL Y AL MEDICO", prereq: ["MEDI_B001"] },
          { id: "DMAE_E004", nombre: "BIOESTADISTICA Y PRINCIPIOS DE MEDICINA BASADA EN EVIDENCIA"},
          { id: "DBIO_1081", nombre: "MICROBIOLOGIA MEDICA", prereq: ["MEDI_B004", "DBIO_1078"] },
          { id: "FILS_0002", nombre: "ETICA", prereq: ["FILS_0001"] },
        ]
      },
      {
        semestre: 4,
        ramos: [
          { id: "MEDI_D001", nombre: "FISIOPATOLOGIA MEDICA", prereq: ["MEDI_C001"]},
          { id: "MEDI_D002", nombre: "MORFO III", prereq: ["MEDI_C001", "MEDI_C002"]},
          { id: "MEDI_D003", nombre: "RAZONAMIENTO MEDICO CLINICO I", prereq: ["MEDI_C001","MEDI_C002"] },
          { id: "ELEFORIN02", nombre: "ELECTIVO FORMACION INTEGRAL II"},
          { id: "DSPU_0002", nombre: "SALUD POBLACIONAL", prereq: ["DMAE_E004"]},
        ]
      },
      {
        semestre: 5,
        ramos: [
          { id: "MEDI_E001", nombre: "SEMIOLOGIA I", prereq: ["MEDI_D001", "MEDI_D002", "MEDI_D003"]},
          { id: "MEDI_E002", nombre: "PATOLOGIA MEDICA", prereq: ["MEDI_D001", "DBIO_1081", "MEDI_D002"]},
          { id: "DSPU_0004", nombre: "EPIDEMIOLOGIA", prereq: ["DSPU_0002"] },
          { id: "DSPU_0006", nombre: "BIOETICA", prereq: ["MEDI_D003"]},
          { id: "ELEFORIN03", nombre: "ELECTIVO FORMACION INTEGRAL III"},
          { id: "ELEFORIN01", nombre: "ELECTIVO FORMACION INTEGRAL I", prereq: ["FILS_0002"]},
        ]
      },
      {
        semestre: 6,
        ramos: [
          { id: "MEDI_F001", nombre: "SEMIOLOGIA II", prereq: ["MEDI_E001", "MEDI_E002"]},
          { id: "MEDI_F002", nombre: "RAZONAMIENTO MEDICO CLINICO II", prereq: ["MEDI_E001", "MEDI_E002"]},
          { id: "DBIO_1082", nombre: "FARMACOLOGIA GENERAL", prereq: ["MEDI_E002"] },
          { id: "ENFE_SD01", nombre: "SALUD DIGITAL", prereq: ["MEDI_E001"]},
          { id: "DSPU_0005", nombre: "METODOLOGIA DE LA INVESTIGACION", prereq: ["DMAE_E004"]},
          { id: "ELEFORIN04", nombre: "ELECTIVO FORMACION INTEGRAL IV"},
        ]
      },
      {
        semestre: 7,
        ramos: [
          { id: "MEDI_G001", nombre: "MEDICINA INTERNA I", prereq: ["MEDI_F001", "MEDI_F002", "DBIO_1081"]},
          { id: "MEDI_G002", nombre: "CIRUGIA I", prereq: ["MEDI_F001", "MEDI_F002", "DBIO_1081"]},
          { id: "MEDI_G003", nombre: "PSIQUIATRIA I", prereq: ["MEDI_F001", "MEDI_F002", "DBIO_1081"] },
          { id: "MEDI_G004", nombre: "SALUD PUEBLOS ORIGINARIOS Y MIGRANTES", prereq: ["MEDI_F002"]},
        ]
      },
      {
        semestre: 8,
        ramos: [
          { id: "MEDI_H001", nombre: "MEDICINA INTERNA II", prereq: ["MEDI_G001"]},
          { id: "MEDI_H002", nombre: "CIRUGIA II", prereq: ["MEDI_G002"]},
          { id: "MEDI_H003", nombre: "PSIQUIATRIA II", prereq: ["MEDI_G003"]},
          { id: "MEDI_H004", nombre: "MEDICINA LEGAL", prereq: ["MEDI_G004"]},
        ]
      },
      {
        semestre: 9,
        ramos: [
          { id: "MEDI_I001", nombre: "PEDIATRIA I", prereq: ["MEDI_H001", "MEDI_H003", "MEDI_H004"]},
          { id: "MEDI_I002", nombre: "GINECOLOGIA - OBSTETRICIA I", prereq: ["MEDI_H001", "MEDI_H002", "MEDI_H004"]},
          { id: "MEDI_I003", nombre: "ESPECIALIDADES I", prereq: ["MEDI_H001"] },
          { id: "MEDI_I004", nombre: "MEDICINA FAMILIAR Y COMUNITARIA", prereq: ["MEDI_H001"]},
          { id: "MEDI_I005", nombre: "CUIDADOS PALIATIVOS Y FIN DE LA VIDA", prereq: ["MEDI_H001", "MEDI_H002", "MEDI_H003", "MEDI_H004"]},
          { id: "DSPU_0010", nombre: "SALUD POBLACIONAL APLICADA A LA MEDICINA", prereq: ["MEDI_H004"]},
        ]
      },
      {
        semestre: 10,
        ramos: [
          { id: "MEDI_J001", nombre: "PEDIATRIA II", prereq: ["MEDI_I001"]},
          { id: "MEDI_J002", nombre: "GINECOLOGIA - OBSTETRICIA II", prereq: ["MEDI_I002"]},
          { id: "MEDI_J003", nombre: "ESPECIALIDADES II", prereq: ["MEDI_I004", "MEDI_I005"]},
          { id: "MEDI_J004", nombre: "MEDICINA DE URGENCIA Y TRAUMA", prereq: ["MEDI_I001", "MEDI_I002", "MEDI_I005"]},
          { id: "MEDI_J005", nombre: "RAZONAMIENTO MEDICO CLINICO III", prereq: ["MEDI_I004", "MEDI_I005"]},
        ]
      },
      {
        semestre: 11,
        ramos: [
          { id: "MEDI_K001", nombre: "INTERNADO MEDICINA INTERNA"},
          { id: "MEDI_K002", nombre: "INTERNADO PEDIATRIA"},
        ]
      },
      {
        semestre: 12,
        ramos: [
          { id: "MEDI_L001", nombre: "INTERNADO SALUD MENTAL"},
          { id: "MEDI_L002", nombre: "INTERNADO MEDICINA FAMILIAR"},
          { id: "EINMEDI01", nombre: "INTERNADO ELECTIVO I"},
        ]
      },
      {
        semestre: 13,
        ramos: [
          { id: "MEDI_M001", nombre: "INTERNADO ESPECIALIDADES MEDICINA INTERNA", prereq: ["MEDI_K001", "MEDI_L001"]},
          { id: "MEDI_M002", nombre: "INTERNADO CIRUGIA Y UROLOGIA", prereq: ["MEDI_K001"]},
          { id: "EINMEDI02", nombre: "INTERNADO ELECTIVO II", prereq: ["MEDI_K002", "MEDI_L002"]},
        ]
      },
      {
        semestre: 14,
        ramos: [
          { id: "MEDI_N001", nombre: "INTERNADO GINECOLOGIA Y OBSTETRICIA", prereq: ["MEDI_M001", "MEDI_M002"]},
          { id: "MEDI_N002", nombre: "INTERNADO MEDICINA DE URGENCIA Y TRAUMATOLOGIA", prereq: ["MEDI_K001", "MEDI_K002", "MEDI_M002", "MEDI_L002"]},
          { id: "MEDI_N003", nombre: "RAZONAMIENTO MEDICO CLINICO", prereq: ["MEDI_M001", "MEDI_M002"]},
        ]
      },
      // Puedes seguir agregando todos los semestres aquí...
    ];

    const estadoRamos = {};

    function renderMalla() {
      const grid = document.querySelector('.malla-grid');
      grid.innerHTML = '';

      malla.forEach(({ semestre, ramos }) => {
        const div = document.createElement('div');
        div.classList.add('semestre');
        div.id = `sem${semestre}`;

        const h2 = document.createElement('h2');
        h2.textContent = `${semestre}° Semestre`;
        div.appendChild(h2);

        ramos.forEach(({ id, nombre, prereq }) => {
          const ramo = document.createElement('div');
          ramo.className = 'ramo';
          ramo.id = id;
          ramo.textContent = nombre;
          ramo.onclick = () => aprobar(id);
          if (prereq) ramo.dataset.prereq = prereq.join(',');
          if (!prereq || prereq.length === 0) ramo.classList.add('libre');
          div.appendChild(ramo);
        });

        grid.appendChild(div);
      });
      actualizarBloqueos();
    }

    function aprobar(id) {
      const ramo = document.getElementById(id);
      if (!ramo || ramo.classList.contains('bloqueado')) return;

      const aprobado = ramo.classList.toggle('aprobado');
      estadoRamos[id] = aprobado;
      guardarEstado();
      actualizarBloqueos();
    }

    function actualizarBloqueos() {
      document.querySelectorAll('.ramo').forEach(ramo => {
        const id = ramo.id;
        const prereqs = ramo.dataset.prereq?.split(',') || [];

        const desbloqueado = prereqs.every(pr => estadoRamos[pr]);

        if (prereqs.length === 0 || desbloqueado) {
          ramo.classList.remove('bloqueado');
          ramo.style.cursor = 'pointer';
        } else {
          ramo.classList.add('bloqueado');
          ramo.classList.remove('aprobado');
          estadoRamos[id] = false;
          ramo.style.cursor = 'not-allowed';
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
    cargarEstado();   // <-- NUEVO
    renderMalla();
    });
