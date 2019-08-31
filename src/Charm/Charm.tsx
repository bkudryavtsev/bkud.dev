import React, { Component } from 'react'

interface CharmProps {
  numCells: number
  cellWidth: number
  interval?: number
  baseColor?: string
}

interface CharmState {}

class Charm extends Component<CharmProps, CharmState> {
  private canvasRef: React.RefObject<HTMLCanvasElement>
  private ctx: CanvasRenderingContext2D
  private intervalId: number
  private grid: string[][]
  private canvasWidth: number

  static defaultProps = {
    interval: 150,
    baseColor: '#FFD700'
  }

  constructor(props: CharmProps) {
    super(props)

    this.canvasRef = React.createRef<HTMLCanvasElement>()
  }

  componentDidMount() {
    const { cellWidth, numCells, interval } = this.props

    const canvas: HTMLCanvasElement = this.canvasRef.current
    this.canvasWidth = cellWidth * numCells

    canvas.width = this.canvasWidth
    canvas.height = this.canvasWidth

    this.ctx = canvas.getContext('2d')
    this.grid = this.populateGrid()

    this.intervalId = setInterval(() => this.drawCanvas(), interval)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  populateGrid() {
    const { numCells, baseColor } = this.props

    let arr: string[][] = []

    for (let i = 0; i < numCells; i++) {
      arr[i] = []
      for (let j = 0; j < numCells; j++) {
        arr[i][j] = this.genColor(baseColor)
      }
    }

    return arr
  }

  genColor(color: string) {
    const random: number = Math.random()

    let p: number = 1
    let result: string = '#'

    while (p < color.length) {
      let temp: number = parseInt(color.slice(p, (p += 2)), 16)
      temp += Math.floor((255 - temp) * random)
      result += temp.toString(16).padStart(2, '0')
    }

    return result
  }

  updateGrid() {
    const { baseColor, numCells } = this.props

    let randRow = Math.floor(Math.random() * numCells)
    let randCol = Math.floor(Math.random() * numCells)

    this.grid[randRow][randCol] = this.genColor(baseColor)
  }

  drawCanvas() {
    const { cellWidth, numCells } = this.props
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasWidth)
    this.updateGrid()

    this.grid.forEach((row, i) => {
      row.forEach((color, j) => {
        this.ctx.fillStyle = color
        this.ctx.fillRect(
          (j * this.canvasWidth) / numCells,
          (i * this.canvasWidth) / numCells,
          cellWidth,
          cellWidth
        )
      })
    })
  }

  render() {
    return (
      <div className="charm">
        <canvas ref={this.canvasRef}></canvas>
      </div>
    )
  }
}

export default Charm
