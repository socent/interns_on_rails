class InternsController < ApplicationController
  def index
  end

  def show
    @intern = Intern.find(params[:id])
  end

  def new
    @intern = Intern.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
