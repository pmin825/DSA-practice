class ParkingSystem

  =begin
      :type big: Integer
      :type medium: Integer
      :type small: Integer
  =end
      def initialize(big, medium, small)
          @spaces = [0, big, medium, small]
      end
  
  
  =begin
      :type car_type: Integer
      :rtype: Boolean
  =end
      def add_car(car_type)
          return false if 0 == @spaces[car_type]
          @spaces[car_type] -= 1
          true
      end
  end


#test
